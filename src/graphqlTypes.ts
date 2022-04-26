import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: string;
  AWSDateTime: string;
  AWSEmail: string;
  AWSIPAddress: string;
  AWSJSON: string;
  AWSPhone: string;
  AWSTime: string;
  AWSTimestamp: number;
  AWSURL: string;
};

export type Attribute = {
  __typename?: 'Attribute';
  name: Scalars['String'];
  type: InputType;
};

export type AttributeInput = {
  name: Scalars['String'];
  type: InputType;
};

export type AttributeSortTerm = {
  attribute: Scalars['String'];
  sortOrder: SortOrder;
};

export type AttributeValue = {
  __typename?: 'AttributeValue';
  attribute: Attribute;
  value: Scalars['String'];
};

export type AttributeValueInput = {
  attribute: AttributeInput;
  value: Scalars['String'];
};

export type FolderConnection = {
  __typename?: 'FolderConnection';
  files?: Maybe<Array<MetaData>>;
  folders?: Maybe<Array<MetaData>>;
  nextToken?: Maybe<Scalars['String']>;
};

export enum InputType {
  Number = 'NUMBER',
  String = 'STRING'
}

export type MetaData = {
  __typename?: 'MetaData';
  attributes?: Maybe<Array<AttributeValue>>;
  id: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type MetaDataInput = {
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateMetaData?: Maybe<MetaData>;
};


export type MutationUpdateMetaDataArgs = {
  id: Scalars['String'];
  metaDataInput?: InputMaybe<MetaDataInput>;
};

export type Query = {
  __typename?: 'Query';
  attributes: Array<Attribute>;
  listFolder?: Maybe<FolderConnection>;
  search?: Maybe<FolderConnection>;
  tags: Array<Scalars['String']>;
};


export type QueryListFolderArgs = {
  id?: InputMaybe<Scalars['String']>;
  nextToken?: InputMaybe<Scalars['String']>;
  pageSize: Scalars['Int'];
};


export type QuerySearchArgs = {
  nextToken?: InputMaybe<Scalars['String']>;
  pageSize: Scalars['Int'];
  searchInput?: InputMaybe<SearchInput>;
};

export type SearchInput = {
  filter: MetaDataInput;
  sorter?: InputMaybe<Array<AttributeSortTerm>>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AWSDate: ResolverTypeWrapper<Scalars['AWSDate']>;
  AWSDateTime: ResolverTypeWrapper<Scalars['AWSDateTime']>;
  AWSEmail: ResolverTypeWrapper<Scalars['AWSEmail']>;
  AWSIPAddress: ResolverTypeWrapper<Scalars['AWSIPAddress']>;
  AWSJSON: ResolverTypeWrapper<Scalars['AWSJSON']>;
  AWSPhone: ResolverTypeWrapper<Scalars['AWSPhone']>;
  AWSTime: ResolverTypeWrapper<Scalars['AWSTime']>;
  AWSTimestamp: ResolverTypeWrapper<Scalars['AWSTimestamp']>;
  AWSURL: ResolverTypeWrapper<Scalars['AWSURL']>;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeInput: AttributeInput;
  AttributeSortTerm: AttributeSortTerm;
  AttributeValue: ResolverTypeWrapper<AttributeValue>;
  AttributeValueInput: AttributeValueInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FolderConnection: ResolverTypeWrapper<FolderConnection>;
  InputType: InputType;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MetaData: ResolverTypeWrapper<MetaData>;
  MetaDataInput: MetaDataInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SearchInput: SearchInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AWSDate: Scalars['AWSDate'];
  AWSDateTime: Scalars['AWSDateTime'];
  AWSEmail: Scalars['AWSEmail'];
  AWSIPAddress: Scalars['AWSIPAddress'];
  AWSJSON: Scalars['AWSJSON'];
  AWSPhone: Scalars['AWSPhone'];
  AWSTime: Scalars['AWSTime'];
  AWSTimestamp: Scalars['AWSTimestamp'];
  AWSURL: Scalars['AWSURL'];
  Attribute: Attribute;
  AttributeInput: AttributeInput;
  AttributeSortTerm: AttributeSortTerm;
  AttributeValue: AttributeValue;
  AttributeValueInput: AttributeValueInput;
  Boolean: Scalars['Boolean'];
  FolderConnection: FolderConnection;
  Int: Scalars['Int'];
  MetaData: MetaData;
  MetaDataInput: MetaDataInput;
  Mutation: {};
  Query: {};
  SearchInput: SearchInput;
  String: Scalars['String'];
};

export interface AwsDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDate'], any> {
  name: 'AWSDate';
}

export interface AwsDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDateTime'], any> {
  name: 'AWSDateTime';
}

export interface AwsEmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSEmail'], any> {
  name: 'AWSEmail';
}

export interface AwsipAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSIPAddress'], any> {
  name: 'AWSIPAddress';
}

export interface AwsjsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSJSON'], any> {
  name: 'AWSJSON';
}

export interface AwsPhoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSPhone'], any> {
  name: 'AWSPhone';
}

export interface AwsTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSTime'], any> {
  name: 'AWSTime';
}

export interface AwsTimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSTimestamp'], any> {
  name: 'AWSTimestamp';
}

export interface AwsurlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSURL'], any> {
  name: 'AWSURL';
}

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['InputType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttributeValue'] = ResolversParentTypes['AttributeValue']> = {
  attribute?: Resolver<ResolversTypes['Attribute'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderConnection'] = ResolversParentTypes['FolderConnection']> = {
  files?: Resolver<Maybe<Array<ResolversTypes['MetaData']>>, ParentType, ContextType>;
  folders?: Resolver<Maybe<Array<ResolversTypes['MetaData']>>, ParentType, ContextType>;
  nextToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetaData'] = ResolversParentTypes['MetaData']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['AttributeValue']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateMetaData?: Resolver<Maybe<ResolversTypes['MetaData']>, ParentType, ContextType, RequireFields<MutationUpdateMetaDataArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  attributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  listFolder?: Resolver<Maybe<ResolversTypes['FolderConnection']>, ParentType, ContextType, RequireFields<QueryListFolderArgs, 'pageSize'>>;
  search?: Resolver<Maybe<ResolversTypes['FolderConnection']>, ParentType, ContextType, RequireFields<QuerySearchArgs, 'pageSize'>>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AWSDate?: GraphQLScalarType;
  AWSDateTime?: GraphQLScalarType;
  AWSEmail?: GraphQLScalarType;
  AWSIPAddress?: GraphQLScalarType;
  AWSJSON?: GraphQLScalarType;
  AWSPhone?: GraphQLScalarType;
  AWSTime?: GraphQLScalarType;
  AWSTimestamp?: GraphQLScalarType;
  AWSURL?: GraphQLScalarType;
  Attribute?: AttributeResolvers<ContextType>;
  AttributeValue?: AttributeValueResolvers<ContextType>;
  FolderConnection?: FolderConnectionResolvers<ContextType>;
  MetaData?: MetaDataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

