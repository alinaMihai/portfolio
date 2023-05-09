import { iProject } from "@/components/projects/Project";
import gql from "graphql-tag";
import apolloClient from "./apollo-client";

interface iProjectCollection {
    projectCollection: {
        items: iProject[]
    }
}

export async function getAllProjects() {
    const { data } = await apolloClient.query<iProjectCollection>({
        query: gql`
        query GetProjectCollection {
            projectCollection {
                items {
                  year
                  title
                  image {
                    url
                  }
                  description
                  site
                  repository
                  technologies
                  date
                }
              }
        }
        `
    });
    return data.projectCollection.items || [];
}