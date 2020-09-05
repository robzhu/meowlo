import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addList: TodoList;
  addItem: TodoItem;
  setItemDone: TodoItem;
  clearDoneItems: TodoList;
};


export type MutationAddListArgs = {
  name: Scalars['String'];
};


export type MutationAddItemArgs = {
  input: NewItemInput;
};


export type MutationSetItemDoneArgs = {
  done: Scalars['Boolean'];
  itemId: Scalars['String'];
  listId: Scalars['String'];
};


export type MutationClearDoneItemsArgs = {
  listId: Scalars['String'];
};

/** Input type for new TODO item */
export type NewItemInput = {
  listId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allLists: Array<TodoList>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  priority: Scalars['Float'];
  done: Scalars['Boolean'];
};

export type TodoList = {
  __typename?: 'TodoList';
  id: Scalars['ID'];
  name: Scalars['String'];
  items: Array<TodoItem>;
};

export type AddNewItemMutationVariables = Exact<{
  input: NewItemInput;
}>;


export type AddNewItemMutation = (
  { __typename?: 'Mutation' }
  & { addItem: (
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id' | 'name' | 'description' | 'done'>
  ) }
);

export type AddNewListMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AddNewListMutation = (
  { __typename?: 'Mutation' }
  & { addList: (
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'name'>
  ) }
);

export type ClearDoneItemsMutationVariables = Exact<{
  listId: Scalars['String'];
}>;


export type ClearDoneItemsMutation = (
  { __typename?: 'Mutation' }
  & { clearDoneItems: (
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id'>
  ) }
);

export type GetAllListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllListsQuery = (
  { __typename?: 'Query' }
  & { allLists: Array<(
    { __typename?: 'TodoList' }
    & FullListDetailsFragment
  )> }
);

export type FullListDetailsFragment = (
  { __typename?: 'TodoList' }
  & Pick<TodoList, 'id' | 'name'>
  & { items: Array<(
    { __typename?: 'TodoItem' }
    & FullItemDetailsFragment
  )> }
);

export type FullItemDetailsFragment = (
  { __typename?: 'TodoItem' }
  & Pick<TodoItem, 'id' | 'name' | 'description' | 'done'>
);

export type SetItemDoneMutationVariables = Exact<{
  done: Scalars['Boolean'];
  listId: Scalars['String'];
  itemId: Scalars['String'];
}>;


export type SetItemDoneMutation = (
  { __typename?: 'Mutation' }
  & { setItemDone: (
    { __typename?: 'TodoItem' }
    & FullItemDetailsFragment
  ) }
);

export const FullItemDetailsFragmentDoc = gql`
    fragment FullItemDetails on TodoItem {
  id
  name
  description
  done
}
    `;
export const FullListDetailsFragmentDoc = gql`
    fragment FullListDetails on TodoList {
  id
  name
  items {
    ...FullItemDetails
  }
}
    ${FullItemDetailsFragmentDoc}`;
export const AddNewItemDocument = gql`
    mutation AddNewItem($input: NewItemInput!) {
  addItem(input: $input) {
    id
    name
    description
    done
  }
}
    `;
export type AddNewItemMutationFn = ApolloReactCommon.MutationFunction<AddNewItemMutation, AddNewItemMutationVariables>;
export type AddNewItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddNewItemMutation, AddNewItemMutationVariables>, 'mutation'>;

    export const AddNewItemComponent = (props: AddNewItemComponentProps) => (
      <ApolloReactComponents.Mutation<AddNewItemMutation, AddNewItemMutationVariables> mutation={AddNewItemDocument} {...props} />
    );
    
export type AddNewItemProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddNewItemMutation, AddNewItemMutationVariables>
    } & TChildProps;
export function withAddNewItem<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddNewItemMutation,
  AddNewItemMutationVariables,
  AddNewItemProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddNewItemMutation, AddNewItemMutationVariables, AddNewItemProps<TChildProps, TDataName>>(AddNewItemDocument, {
      alias: 'addNewItem',
      ...operationOptions
    });
};
export type AddNewItemMutationResult = ApolloReactCommon.MutationResult<AddNewItemMutation>;
export type AddNewItemMutationOptions = ApolloReactCommon.BaseMutationOptions<AddNewItemMutation, AddNewItemMutationVariables>;
export const AddNewListDocument = gql`
    mutation AddNewList($name: String!) {
  addList(name: $name) {
    id
    name
  }
}
    `;
export type AddNewListMutationFn = ApolloReactCommon.MutationFunction<AddNewListMutation, AddNewListMutationVariables>;
export type AddNewListComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddNewListMutation, AddNewListMutationVariables>, 'mutation'>;

    export const AddNewListComponent = (props: AddNewListComponentProps) => (
      <ApolloReactComponents.Mutation<AddNewListMutation, AddNewListMutationVariables> mutation={AddNewListDocument} {...props} />
    );
    
export type AddNewListProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddNewListMutation, AddNewListMutationVariables>
    } & TChildProps;
export function withAddNewList<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddNewListMutation,
  AddNewListMutationVariables,
  AddNewListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddNewListMutation, AddNewListMutationVariables, AddNewListProps<TChildProps, TDataName>>(AddNewListDocument, {
      alias: 'addNewList',
      ...operationOptions
    });
};
export type AddNewListMutationResult = ApolloReactCommon.MutationResult<AddNewListMutation>;
export type AddNewListMutationOptions = ApolloReactCommon.BaseMutationOptions<AddNewListMutation, AddNewListMutationVariables>;
export const ClearDoneItemsDocument = gql`
    mutation ClearDoneItems($listId: String!) {
  clearDoneItems(listId: $listId) {
    id
  }
}
    `;
export type ClearDoneItemsMutationFn = ApolloReactCommon.MutationFunction<ClearDoneItemsMutation, ClearDoneItemsMutationVariables>;
export type ClearDoneItemsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ClearDoneItemsMutation, ClearDoneItemsMutationVariables>, 'mutation'>;

    export const ClearDoneItemsComponent = (props: ClearDoneItemsComponentProps) => (
      <ApolloReactComponents.Mutation<ClearDoneItemsMutation, ClearDoneItemsMutationVariables> mutation={ClearDoneItemsDocument} {...props} />
    );
    
export type ClearDoneItemsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ClearDoneItemsMutation, ClearDoneItemsMutationVariables>
    } & TChildProps;
export function withClearDoneItems<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ClearDoneItemsMutation,
  ClearDoneItemsMutationVariables,
  ClearDoneItemsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ClearDoneItemsMutation, ClearDoneItemsMutationVariables, ClearDoneItemsProps<TChildProps, TDataName>>(ClearDoneItemsDocument, {
      alias: 'clearDoneItems',
      ...operationOptions
    });
};
export type ClearDoneItemsMutationResult = ApolloReactCommon.MutationResult<ClearDoneItemsMutation>;
export type ClearDoneItemsMutationOptions = ApolloReactCommon.BaseMutationOptions<ClearDoneItemsMutation, ClearDoneItemsMutationVariables>;
export const GetAllListsDocument = gql`
    query GetAllLists {
  allLists {
    ...FullListDetails
  }
}
    ${FullListDetailsFragmentDoc}`;
export type GetAllListsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllListsQuery, GetAllListsQueryVariables>, 'query'>;

    export const GetAllListsComponent = (props: GetAllListsComponentProps) => (
      <ApolloReactComponents.Query<GetAllListsQuery, GetAllListsQueryVariables> query={GetAllListsDocument} {...props} />
    );
    
export type GetAllListsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllListsQuery, GetAllListsQueryVariables>
    } & TChildProps;
export function withGetAllLists<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllListsQuery,
  GetAllListsQueryVariables,
  GetAllListsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllListsQuery, GetAllListsQueryVariables, GetAllListsProps<TChildProps, TDataName>>(GetAllListsDocument, {
      alias: 'getAllLists',
      ...operationOptions
    });
};
export type GetAllListsQueryResult = ApolloReactCommon.QueryResult<GetAllListsQuery, GetAllListsQueryVariables>;
export const SetItemDoneDocument = gql`
    mutation SetItemDone($done: Boolean!, $listId: String!, $itemId: String!) {
  setItemDone(done: $done, listId: $listId, itemId: $itemId) {
    ...FullItemDetails
  }
}
    ${FullItemDetailsFragmentDoc}`;
export type SetItemDoneMutationFn = ApolloReactCommon.MutationFunction<SetItemDoneMutation, SetItemDoneMutationVariables>;
export type SetItemDoneComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetItemDoneMutation, SetItemDoneMutationVariables>, 'mutation'>;

    export const SetItemDoneComponent = (props: SetItemDoneComponentProps) => (
      <ApolloReactComponents.Mutation<SetItemDoneMutation, SetItemDoneMutationVariables> mutation={SetItemDoneDocument} {...props} />
    );
    
export type SetItemDoneProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SetItemDoneMutation, SetItemDoneMutationVariables>
    } & TChildProps;
export function withSetItemDone<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SetItemDoneMutation,
  SetItemDoneMutationVariables,
  SetItemDoneProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SetItemDoneMutation, SetItemDoneMutationVariables, SetItemDoneProps<TChildProps, TDataName>>(SetItemDoneDocument, {
      alias: 'setItemDone',
      ...operationOptions
    });
};
export type SetItemDoneMutationResult = ApolloReactCommon.MutationResult<SetItemDoneMutation>;
export type SetItemDoneMutationOptions = ApolloReactCommon.BaseMutationOptions<SetItemDoneMutation, SetItemDoneMutationVariables>;