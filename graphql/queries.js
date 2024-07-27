/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBetaUser = /* GraphQL */ `
  query GetBetaUser($id: ID!) {
    getBetaUser(id: $id) {
      name {
        first
        last
        discord
      }
      favoritePlatform {
        xbox
        playstation
      }
      favoriteGame {
        apex
        fortnite
        rainbowsix
      }
      email
      phone_number
      createdAt
    }
  }
`;
export const listBetaUsers = /* GraphQL */ `
  query ListBetaUsers(
    $filter: ModelBetaUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBetaUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name {
          first
          last
          discord
        }
        favoritePlatform {
          xbox
          playstation
        }
        favoriteGame {
          apex
          fortnite
          rainbowsix
        }
        email
        phone_number
        createdAt
      }
      nextToken
    }
  }
`;
