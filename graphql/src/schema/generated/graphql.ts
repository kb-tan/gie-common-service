/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../../types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String']['output'];
  id: Scalars['String']['output'];
  publishedYear?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CategoryInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Message = {
  __typename?: 'Message';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type MessageInput2Input = {
  content: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Add a new book
   *
   * Equivalent to POST /books
   */
  addBook?: Maybe<Book>;
  /**
   * Add a new pet to the store.
   *
   * Equivalent to POST /pet
   */
  addPet?: Maybe<Pet>;
  /**
   * Create a new greeting message
   *
   * Equivalent to POST /helloworld
   */
  createHelloworldMessage?: Maybe<Message>;
  /**
   * Update a greeting message
   *
   * Equivalent to PUT /helloworld/{messageId}
   */
  updateHelloworldMessage?: Maybe<Message>;
  /**
   * Update an existing pet by Id.
   *
   * Equivalent to PUT /pet
   */
  updatePet?: Maybe<Pet>;
};


export type MutationAddBookArgs = {
  newBookInput: NewBookInput;
};


export type MutationAddPetArgs = {
  petInput: PetInput;
};


export type MutationCreateHelloworldMessageArgs = {
  messageInput2Input: MessageInput2Input;
};


export type MutationUpdateHelloworldMessageArgs = {
  messageId: Scalars['Int']['input'];
  messageInput2Input: MessageInput2Input;
};


export type MutationUpdatePetArgs = {
  petInput: PetInput;
};

export type NewBookInput = {
  author: Scalars['String']['input'];
  publishedYear?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type Pet = {
  __typename?: 'Pet';
  category?: Maybe<Category>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name: Scalars['String']['output'];
  photoUrls: Array<Maybe<Scalars['String']['output']>>;
  /** pet status in the store */
  status?: Maybe<Status>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type PetInput = {
  category?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  photoUrls: Array<InputMaybe<Scalars['String']['input']>>;
  /** pet status in the store */
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export type Query = {
  __typename?: 'Query';
  /**
   * Multiple status values can be provided with comma separated strings.
   *
   * Equivalent to GET /pet/findByStatus
   */
  findPetsByStatus?: Maybe<Array<Maybe<Pet>>>;
  /**
   * Get a book
   *
   * Equivalent to GET /books/{bookId}
   */
  getBook?: Maybe<Book>;
  /**
   * Retrieve a greeting message by ID
   *
   * Equivalent to GET /helloworld/{messageId}
   */
  getHelloworldMessageById?: Maybe<Message>;
  /**
   * List all books
   *
   * Equivalent to GET /books
   */
  listBooks?: Maybe<Array<Maybe<Book>>>;
  /**
   * List all greeting messages
   *
   * Equivalent to GET /helloworld
   */
  listHelloworldMessages?: Maybe<Array<Maybe<Message>>>;
};


export type QueryFindPetsByStatusArgs = {
  status?: InputMaybe<Status2>;
};


export type QueryGetBookArgs = {
  bookId: Scalars['String']['input'];
};


export type QueryGetHelloworldMessageByIdArgs = {
  messageId: Scalars['Int']['input'];
};

export enum Status {
  Available = 'AVAILABLE',
  Pending = 'PENDING',
  Sold = 'SOLD'
}

export enum Status2 {
  Available = 'AVAILABLE',
  Pending = 'PENDING',
  Sold = 'SOLD'
}

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TagInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};



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
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryInput: CategoryInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Message: ResolverTypeWrapper<Message>;
  MessageInput2Input: MessageInput2Input;
  Mutation: ResolverTypeWrapper<{}>;
  NewBookInput: NewBookInput;
  Pet: ResolverTypeWrapper<Pet>;
  PetInput: PetInput;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
  Status2: Status2;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  TagInput: TagInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt']['output'];
  Book: Book;
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  CategoryInput: CategoryInput;
  Int: Scalars['Int']['output'];
  Message: Message;
  MessageInput2Input: MessageInput2Input;
  Mutation: {};
  NewBookInput: NewBookInput;
  Pet: Pet;
  PetInput: PetInput;
  Query: {};
  String: Scalars['String']['output'];
  Tag: Tag;
  TagInput: TagInput;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishedYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<MutationAddBookArgs, 'newBookInput'>>;
  addPet?: Resolver<Maybe<ResolversTypes['Pet']>, ParentType, ContextType, RequireFields<MutationAddPetArgs, 'petInput'>>;
  createHelloworldMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationCreateHelloworldMessageArgs, 'messageInput2Input'>>;
  updateHelloworldMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdateHelloworldMessageArgs, 'messageId' | 'messageInput2Input'>>;
  updatePet?: Resolver<Maybe<ResolversTypes['Pet']>, ParentType, ContextType, RequireFields<MutationUpdatePetArgs, 'petInput'>>;
};

export type PetResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Pet'] = ResolversParentTypes['Pet']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrls?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findPetsByStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, Partial<QueryFindPetsByStatusArgs>>;
  getBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryGetBookArgs, 'bookId'>>;
  getHelloworldMessageById?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryGetHelloworldMessageByIdArgs, 'messageId'>>;
  listBooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  listHelloworldMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
};

export type TagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  BigInt?: GraphQLScalarType;
  Book?: BookResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pet?: PetResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
};

