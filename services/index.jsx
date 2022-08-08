import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (hide = false) => {
  const query = gql`
    query MyQuery($hide : Boolean!) {
      postsConnection(where: {hide: $hide}, orderBy: date_DESC, first: 100) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            date
            slug
            title
            exce
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { hide });

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        exce
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug, hide = false) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!], $hide: Boolean!) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}, AND: {hide: $hide}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories, hide });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug, hide = false) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug:String!, $hide:Boolean!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt, AND: {hide: $hide}}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt, AND: {hide: $hide}}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt, hide });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug, hide = false) => {
  const query = gql`
    query GetCategoryPost($slug: String!, $hide: Boolean!) {
      postsConnection(where: {categories_some: {slug: $slug}, hide: $hide}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            date
            slug
            title
            exce
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, hide });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async (hide = false) => {
  const query = gql`
    query GetCategoryPost($hide: Boolean!) {
      posts(where: {featuredPost: true, hide: $hide}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
        date
      }
    }   
  `;

  const result = await request(graphqlAPI, query, { hide });

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const submitQuestion = async (obj) => {
  const result = await fetch('/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async (hide = false) => {
  const query = gql`
    query GetPostDetails($hide: Boolean!) {
      posts(
        where: {hide:$hide}
        orderBy: date_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { hide });

  return result.posts;
}