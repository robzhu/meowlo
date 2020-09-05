import { apolloClient } from "./graphqlClient";
import { GraphQLError } from "graphql";
import {
  GetAllListsQuery,
  GetAllListsDocument,
  AddNewItemMutation,
  AddNewItemMutationVariables,
  AddNewItemDocument,
  AddNewListMutationVariables,
  AddNewListDocument,
  AddNewListMutation,
  SetItemDoneMutation,
  SetItemDoneMutationVariables,
  SetItemDoneDocument,
  ClearDoneItemsMutation,
  ClearDoneItemsMutationVariables,
  ClearDoneItemsDocument
} from "./generated";

export interface ExecutionResult<T> {
  errors?: ReadonlyArray<GraphQLError>;
  data?: Readonly<T>;
}

export async function getAllLists(): Promise<
  ExecutionResult<GetAllListsQuery>
> {
  return await apolloClient.query<GetAllListsQuery>({
    query: GetAllListsDocument,
    fetchPolicy: "no-cache"
  });
}

export async function addNewItem(
  variables: AddNewItemMutationVariables
): Promise<ExecutionResult<AddNewItemMutation>> {
  return await apolloClient.mutate<
    AddNewItemMutation,
    AddNewItemMutationVariables
  >({
    mutation: AddNewItemDocument,
    variables
  });
}

export async function addNewList(
  name: string
): Promise<ExecutionResult<AddNewListMutation>> {
  return await apolloClient.mutate<
    AddNewListMutation,
    AddNewListMutationVariables
  >({
    mutation: AddNewListDocument,
    variables: { name }
  });
}

export async function setItemDone(
  listId: string,
  itemId: string,
  done: boolean
) {
  return await apolloClient.mutate<
    SetItemDoneMutation,
    SetItemDoneMutationVariables
  >({
    mutation: SetItemDoneDocument,
    variables: {
      listId,
      itemId,
      done
    }
  });
}

export async function clearDoneItems(listId: string) {
  return await apolloClient.mutate<
    ClearDoneItemsMutation,
    ClearDoneItemsMutationVariables
  >({
    mutation: ClearDoneItemsDocument,
    variables: { listId }
  });
}
