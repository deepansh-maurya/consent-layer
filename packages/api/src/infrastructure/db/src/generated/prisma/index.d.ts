
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model SDKConfig
 * 
 */
export type SDKConfig = $Result.DefaultSelection<Prisma.$SDKConfigPayload>
/**
 * Model APIKey
 * 
 */
export type APIKey = $Result.DefaultSelection<Prisma.$APIKeyPayload>
/**
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sDKConfig`: Exposes CRUD operations for the **SDKConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SDKConfigs
    * const sDKConfigs = await prisma.sDKConfig.findMany()
    * ```
    */
  get sDKConfig(): Prisma.SDKConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aPIKey`: Exposes CRUD operations for the **APIKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more APIKeys
    * const aPIKeys = await prisma.aPIKey.findMany()
    * ```
    */
  get aPIKey(): Prisma.APIKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    AdminUser: 'AdminUser',
    SDKConfig: 'SDKConfig',
    APIKey: 'APIKey',
    UserSession: 'UserSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "adminUser" | "sDKConfig" | "aPIKey" | "userSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      SDKConfig: {
        payload: Prisma.$SDKConfigPayload<ExtArgs>
        fields: Prisma.SDKConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SDKConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SDKConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>
          }
          findFirst: {
            args: Prisma.SDKConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SDKConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>
          }
          findMany: {
            args: Prisma.SDKConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>[]
          }
          create: {
            args: Prisma.SDKConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>
          }
          createMany: {
            args: Prisma.SDKConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SDKConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>[]
          }
          delete: {
            args: Prisma.SDKConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>
          }
          update: {
            args: Prisma.SDKConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>
          }
          deleteMany: {
            args: Prisma.SDKConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SDKConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SDKConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>[]
          }
          upsert: {
            args: Prisma.SDKConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SDKConfigPayload>
          }
          aggregate: {
            args: Prisma.SDKConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSDKConfig>
          }
          groupBy: {
            args: Prisma.SDKConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SDKConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SDKConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SDKConfigCountAggregateOutputType> | number
          }
        }
      }
      APIKey: {
        payload: Prisma.$APIKeyPayload<ExtArgs>
        fields: Prisma.APIKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.APIKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.APIKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          findFirst: {
            args: Prisma.APIKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.APIKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          findMany: {
            args: Prisma.APIKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          create: {
            args: Prisma.APIKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          createMany: {
            args: Prisma.APIKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.APIKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          delete: {
            args: Prisma.APIKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          update: {
            args: Prisma.APIKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          deleteMany: {
            args: Prisma.APIKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.APIKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.APIKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          upsert: {
            args: Prisma.APIKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          aggregate: {
            args: Prisma.APIKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAPIKey>
          }
          groupBy: {
            args: Prisma.APIKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<APIKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.APIKeyCountArgs<ExtArgs>
            result: $Utils.Optional<APIKeyCountAggregateOutputType> | number
          }
        }
      }
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    adminUser?: AdminUserOmit
    sDKConfig?: SDKConfigOmit
    aPIKey?: APIKeyOmit
    userSession?: UserSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    admins: number
    sdkConfigs: number
    apiKeys: number
    sessions: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | OrganizationCountOutputTypeCountAdminsArgs
    sdkConfigs?: boolean | OrganizationCountOutputTypeCountSdkConfigsArgs
    apiKeys?: boolean | OrganizationCountOutputTypeCountApiKeysArgs
    sessions?: boolean | OrganizationCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSdkConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SDKConfigWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APIKeyWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    admins?: boolean | Organization$adminsArgs<ExtArgs>
    sdkConfigs?: boolean | Organization$sdkConfigsArgs<ExtArgs>
    apiKeys?: boolean | Organization$apiKeysArgs<ExtArgs>
    sessions?: boolean | Organization$sessionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | Organization$adminsArgs<ExtArgs>
    sdkConfigs?: boolean | Organization$sdkConfigsArgs<ExtArgs>
    apiKeys?: boolean | Organization$apiKeysArgs<ExtArgs>
    sessions?: boolean | Organization$sessionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      admins: Prisma.$AdminUserPayload<ExtArgs>[]
      sdkConfigs: Prisma.$SDKConfigPayload<ExtArgs>[]
      apiKeys: Prisma.$APIKeyPayload<ExtArgs>[]
      sessions: Prisma.$UserSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends Organization$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sdkConfigs<T extends Organization$sdkConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$sdkConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Organization$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Organization$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Organization$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly created_at: FieldRef<"Organization", 'DateTime'>
    readonly updated_at: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.admins
   */
  export type Organization$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    cursor?: AdminUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * Organization.sdkConfigs
   */
  export type Organization$sdkConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    where?: SDKConfigWhereInput
    orderBy?: SDKConfigOrderByWithRelationInput | SDKConfigOrderByWithRelationInput[]
    cursor?: SDKConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SDKConfigScalarFieldEnum | SDKConfigScalarFieldEnum[]
  }

  /**
   * Organization.apiKeys
   */
  export type Organization$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    where?: APIKeyWhereInput
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    cursor?: APIKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * Organization.sessions
   */
  export type Organization$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    cursor?: UserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    email: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    email: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    org_id: number
    email: number
    password_hash: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    org_id?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    org_id?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    org_id?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    org_id: string
    email: string
    password_hash: string
    role: string
    created_at: Date
    updated_at: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    org_id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "email" | "password_hash" | "role" | "created_at" | "updated_at", ExtArgs["result"]["adminUser"]>
  export type AdminUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      email: string
      password_hash: string
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly org_id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password_hash: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly created_at: FieldRef<"AdminUser", 'DateTime'>
    readonly updated_at: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
  }


  /**
   * Model SDKConfig
   */

  export type AggregateSDKConfig = {
    _count: SDKConfigCountAggregateOutputType | null
    _min: SDKConfigMinAggregateOutputType | null
    _max: SDKConfigMaxAggregateOutputType | null
  }

  export type SDKConfigMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SDKConfigMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SDKConfigCountAggregateOutputType = {
    id: number
    org_id: number
    config_json: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SDKConfigMinAggregateInputType = {
    id?: true
    org_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type SDKConfigMaxAggregateInputType = {
    id?: true
    org_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type SDKConfigCountAggregateInputType = {
    id?: true
    org_id?: true
    config_json?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SDKConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SDKConfig to aggregate.
     */
    where?: SDKConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SDKConfigs to fetch.
     */
    orderBy?: SDKConfigOrderByWithRelationInput | SDKConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SDKConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SDKConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SDKConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SDKConfigs
    **/
    _count?: true | SDKConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SDKConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SDKConfigMaxAggregateInputType
  }

  export type GetSDKConfigAggregateType<T extends SDKConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSDKConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSDKConfig[P]>
      : GetScalarType<T[P], AggregateSDKConfig[P]>
  }




  export type SDKConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SDKConfigWhereInput
    orderBy?: SDKConfigOrderByWithAggregationInput | SDKConfigOrderByWithAggregationInput[]
    by: SDKConfigScalarFieldEnum[] | SDKConfigScalarFieldEnum
    having?: SDKConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SDKConfigCountAggregateInputType | true
    _min?: SDKConfigMinAggregateInputType
    _max?: SDKConfigMaxAggregateInputType
  }

  export type SDKConfigGroupByOutputType = {
    id: string
    org_id: string
    config_json: JsonValue
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: SDKConfigCountAggregateOutputType | null
    _min: SDKConfigMinAggregateOutputType | null
    _max: SDKConfigMaxAggregateOutputType | null
  }

  type GetSDKConfigGroupByPayload<T extends SDKConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SDKConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SDKConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SDKConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SDKConfigGroupByOutputType[P]>
        }
      >
    >


  export type SDKConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    config_json?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sDKConfig"]>

  export type SDKConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    config_json?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sDKConfig"]>

  export type SDKConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    config_json?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sDKConfig"]>

  export type SDKConfigSelectScalar = {
    id?: boolean
    org_id?: boolean
    config_json?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SDKConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "config_json" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["sDKConfig"]>
  export type SDKConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SDKConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SDKConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $SDKConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SDKConfig"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      config_json: Prisma.JsonValue
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["sDKConfig"]>
    composites: {}
  }

  type SDKConfigGetPayload<S extends boolean | null | undefined | SDKConfigDefaultArgs> = $Result.GetResult<Prisma.$SDKConfigPayload, S>

  type SDKConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SDKConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SDKConfigCountAggregateInputType | true
    }

  export interface SDKConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SDKConfig'], meta: { name: 'SDKConfig' } }
    /**
     * Find zero or one SDKConfig that matches the filter.
     * @param {SDKConfigFindUniqueArgs} args - Arguments to find a SDKConfig
     * @example
     * // Get one SDKConfig
     * const sDKConfig = await prisma.sDKConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SDKConfigFindUniqueArgs>(args: SelectSubset<T, SDKConfigFindUniqueArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SDKConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SDKConfigFindUniqueOrThrowArgs} args - Arguments to find a SDKConfig
     * @example
     * // Get one SDKConfig
     * const sDKConfig = await prisma.sDKConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SDKConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SDKConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SDKConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SDKConfigFindFirstArgs} args - Arguments to find a SDKConfig
     * @example
     * // Get one SDKConfig
     * const sDKConfig = await prisma.sDKConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SDKConfigFindFirstArgs>(args?: SelectSubset<T, SDKConfigFindFirstArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SDKConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SDKConfigFindFirstOrThrowArgs} args - Arguments to find a SDKConfig
     * @example
     * // Get one SDKConfig
     * const sDKConfig = await prisma.sDKConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SDKConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SDKConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SDKConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SDKConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SDKConfigs
     * const sDKConfigs = await prisma.sDKConfig.findMany()
     * 
     * // Get first 10 SDKConfigs
     * const sDKConfigs = await prisma.sDKConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sDKConfigWithIdOnly = await prisma.sDKConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SDKConfigFindManyArgs>(args?: SelectSubset<T, SDKConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SDKConfig.
     * @param {SDKConfigCreateArgs} args - Arguments to create a SDKConfig.
     * @example
     * // Create one SDKConfig
     * const SDKConfig = await prisma.sDKConfig.create({
     *   data: {
     *     // ... data to create a SDKConfig
     *   }
     * })
     * 
     */
    create<T extends SDKConfigCreateArgs>(args: SelectSubset<T, SDKConfigCreateArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SDKConfigs.
     * @param {SDKConfigCreateManyArgs} args - Arguments to create many SDKConfigs.
     * @example
     * // Create many SDKConfigs
     * const sDKConfig = await prisma.sDKConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SDKConfigCreateManyArgs>(args?: SelectSubset<T, SDKConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SDKConfigs and returns the data saved in the database.
     * @param {SDKConfigCreateManyAndReturnArgs} args - Arguments to create many SDKConfigs.
     * @example
     * // Create many SDKConfigs
     * const sDKConfig = await prisma.sDKConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SDKConfigs and only return the `id`
     * const sDKConfigWithIdOnly = await prisma.sDKConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SDKConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SDKConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SDKConfig.
     * @param {SDKConfigDeleteArgs} args - Arguments to delete one SDKConfig.
     * @example
     * // Delete one SDKConfig
     * const SDKConfig = await prisma.sDKConfig.delete({
     *   where: {
     *     // ... filter to delete one SDKConfig
     *   }
     * })
     * 
     */
    delete<T extends SDKConfigDeleteArgs>(args: SelectSubset<T, SDKConfigDeleteArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SDKConfig.
     * @param {SDKConfigUpdateArgs} args - Arguments to update one SDKConfig.
     * @example
     * // Update one SDKConfig
     * const sDKConfig = await prisma.sDKConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SDKConfigUpdateArgs>(args: SelectSubset<T, SDKConfigUpdateArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SDKConfigs.
     * @param {SDKConfigDeleteManyArgs} args - Arguments to filter SDKConfigs to delete.
     * @example
     * // Delete a few SDKConfigs
     * const { count } = await prisma.sDKConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SDKConfigDeleteManyArgs>(args?: SelectSubset<T, SDKConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SDKConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SDKConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SDKConfigs
     * const sDKConfig = await prisma.sDKConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SDKConfigUpdateManyArgs>(args: SelectSubset<T, SDKConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SDKConfigs and returns the data updated in the database.
     * @param {SDKConfigUpdateManyAndReturnArgs} args - Arguments to update many SDKConfigs.
     * @example
     * // Update many SDKConfigs
     * const sDKConfig = await prisma.sDKConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SDKConfigs and only return the `id`
     * const sDKConfigWithIdOnly = await prisma.sDKConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SDKConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SDKConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SDKConfig.
     * @param {SDKConfigUpsertArgs} args - Arguments to update or create a SDKConfig.
     * @example
     * // Update or create a SDKConfig
     * const sDKConfig = await prisma.sDKConfig.upsert({
     *   create: {
     *     // ... data to create a SDKConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SDKConfig we want to update
     *   }
     * })
     */
    upsert<T extends SDKConfigUpsertArgs>(args: SelectSubset<T, SDKConfigUpsertArgs<ExtArgs>>): Prisma__SDKConfigClient<$Result.GetResult<Prisma.$SDKConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SDKConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SDKConfigCountArgs} args - Arguments to filter SDKConfigs to count.
     * @example
     * // Count the number of SDKConfigs
     * const count = await prisma.sDKConfig.count({
     *   where: {
     *     // ... the filter for the SDKConfigs we want to count
     *   }
     * })
    **/
    count<T extends SDKConfigCountArgs>(
      args?: Subset<T, SDKConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SDKConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SDKConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SDKConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SDKConfigAggregateArgs>(args: Subset<T, SDKConfigAggregateArgs>): Prisma.PrismaPromise<GetSDKConfigAggregateType<T>>

    /**
     * Group by SDKConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SDKConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SDKConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SDKConfigGroupByArgs['orderBy'] }
        : { orderBy?: SDKConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SDKConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSDKConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SDKConfig model
   */
  readonly fields: SDKConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SDKConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SDKConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SDKConfig model
   */
  interface SDKConfigFieldRefs {
    readonly id: FieldRef<"SDKConfig", 'String'>
    readonly org_id: FieldRef<"SDKConfig", 'String'>
    readonly config_json: FieldRef<"SDKConfig", 'Json'>
    readonly is_active: FieldRef<"SDKConfig", 'Boolean'>
    readonly created_at: FieldRef<"SDKConfig", 'DateTime'>
    readonly updated_at: FieldRef<"SDKConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SDKConfig findUnique
   */
  export type SDKConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * Filter, which SDKConfig to fetch.
     */
    where: SDKConfigWhereUniqueInput
  }

  /**
   * SDKConfig findUniqueOrThrow
   */
  export type SDKConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * Filter, which SDKConfig to fetch.
     */
    where: SDKConfigWhereUniqueInput
  }

  /**
   * SDKConfig findFirst
   */
  export type SDKConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * Filter, which SDKConfig to fetch.
     */
    where?: SDKConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SDKConfigs to fetch.
     */
    orderBy?: SDKConfigOrderByWithRelationInput | SDKConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SDKConfigs.
     */
    cursor?: SDKConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SDKConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SDKConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SDKConfigs.
     */
    distinct?: SDKConfigScalarFieldEnum | SDKConfigScalarFieldEnum[]
  }

  /**
   * SDKConfig findFirstOrThrow
   */
  export type SDKConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * Filter, which SDKConfig to fetch.
     */
    where?: SDKConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SDKConfigs to fetch.
     */
    orderBy?: SDKConfigOrderByWithRelationInput | SDKConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SDKConfigs.
     */
    cursor?: SDKConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SDKConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SDKConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SDKConfigs.
     */
    distinct?: SDKConfigScalarFieldEnum | SDKConfigScalarFieldEnum[]
  }

  /**
   * SDKConfig findMany
   */
  export type SDKConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * Filter, which SDKConfigs to fetch.
     */
    where?: SDKConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SDKConfigs to fetch.
     */
    orderBy?: SDKConfigOrderByWithRelationInput | SDKConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SDKConfigs.
     */
    cursor?: SDKConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SDKConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SDKConfigs.
     */
    skip?: number
    distinct?: SDKConfigScalarFieldEnum | SDKConfigScalarFieldEnum[]
  }

  /**
   * SDKConfig create
   */
  export type SDKConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a SDKConfig.
     */
    data: XOR<SDKConfigCreateInput, SDKConfigUncheckedCreateInput>
  }

  /**
   * SDKConfig createMany
   */
  export type SDKConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SDKConfigs.
     */
    data: SDKConfigCreateManyInput | SDKConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SDKConfig createManyAndReturn
   */
  export type SDKConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SDKConfigs.
     */
    data: SDKConfigCreateManyInput | SDKConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SDKConfig update
   */
  export type SDKConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a SDKConfig.
     */
    data: XOR<SDKConfigUpdateInput, SDKConfigUncheckedUpdateInput>
    /**
     * Choose, which SDKConfig to update.
     */
    where: SDKConfigWhereUniqueInput
  }

  /**
   * SDKConfig updateMany
   */
  export type SDKConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SDKConfigs.
     */
    data: XOR<SDKConfigUpdateManyMutationInput, SDKConfigUncheckedUpdateManyInput>
    /**
     * Filter which SDKConfigs to update
     */
    where?: SDKConfigWhereInput
    /**
     * Limit how many SDKConfigs to update.
     */
    limit?: number
  }

  /**
   * SDKConfig updateManyAndReturn
   */
  export type SDKConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * The data used to update SDKConfigs.
     */
    data: XOR<SDKConfigUpdateManyMutationInput, SDKConfigUncheckedUpdateManyInput>
    /**
     * Filter which SDKConfigs to update
     */
    where?: SDKConfigWhereInput
    /**
     * Limit how many SDKConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SDKConfig upsert
   */
  export type SDKConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the SDKConfig to update in case it exists.
     */
    where: SDKConfigWhereUniqueInput
    /**
     * In case the SDKConfig found by the `where` argument doesn't exist, create a new SDKConfig with this data.
     */
    create: XOR<SDKConfigCreateInput, SDKConfigUncheckedCreateInput>
    /**
     * In case the SDKConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SDKConfigUpdateInput, SDKConfigUncheckedUpdateInput>
  }

  /**
   * SDKConfig delete
   */
  export type SDKConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
    /**
     * Filter which SDKConfig to delete.
     */
    where: SDKConfigWhereUniqueInput
  }

  /**
   * SDKConfig deleteMany
   */
  export type SDKConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SDKConfigs to delete
     */
    where?: SDKConfigWhereInput
    /**
     * Limit how many SDKConfigs to delete.
     */
    limit?: number
  }

  /**
   * SDKConfig without action
   */
  export type SDKConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SDKConfig
     */
    select?: SDKConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SDKConfig
     */
    omit?: SDKConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SDKConfigInclude<ExtArgs> | null
  }


  /**
   * Model APIKey
   */

  export type AggregateAPIKey = {
    _count: APIKeyCountAggregateOutputType | null
    _min: APIKeyMinAggregateOutputType | null
    _max: APIKeyMaxAggregateOutputType | null
  }

  export type APIKeyMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    key: string | null
    created_at: Date | null
    last_used_at: Date | null
    revoked: boolean | null
  }

  export type APIKeyMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    key: string | null
    created_at: Date | null
    last_used_at: Date | null
    revoked: boolean | null
  }

  export type APIKeyCountAggregateOutputType = {
    id: number
    org_id: number
    key: number
    created_at: number
    last_used_at: number
    revoked: number
    _all: number
  }


  export type APIKeyMinAggregateInputType = {
    id?: true
    org_id?: true
    key?: true
    created_at?: true
    last_used_at?: true
    revoked?: true
  }

  export type APIKeyMaxAggregateInputType = {
    id?: true
    org_id?: true
    key?: true
    created_at?: true
    last_used_at?: true
    revoked?: true
  }

  export type APIKeyCountAggregateInputType = {
    id?: true
    org_id?: true
    key?: true
    created_at?: true
    last_used_at?: true
    revoked?: true
    _all?: true
  }

  export type APIKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKey to aggregate.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned APIKeys
    **/
    _count?: true | APIKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: APIKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: APIKeyMaxAggregateInputType
  }

  export type GetAPIKeyAggregateType<T extends APIKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateAPIKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAPIKey[P]>
      : GetScalarType<T[P], AggregateAPIKey[P]>
  }




  export type APIKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APIKeyWhereInput
    orderBy?: APIKeyOrderByWithAggregationInput | APIKeyOrderByWithAggregationInput[]
    by: APIKeyScalarFieldEnum[] | APIKeyScalarFieldEnum
    having?: APIKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: APIKeyCountAggregateInputType | true
    _min?: APIKeyMinAggregateInputType
    _max?: APIKeyMaxAggregateInputType
  }

  export type APIKeyGroupByOutputType = {
    id: string
    org_id: string
    key: string
    created_at: Date
    last_used_at: Date | null
    revoked: boolean
    _count: APIKeyCountAggregateOutputType | null
    _min: APIKeyMinAggregateOutputType | null
    _max: APIKeyMaxAggregateOutputType | null
  }

  type GetAPIKeyGroupByPayload<T extends APIKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<APIKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof APIKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], APIKeyGroupByOutputType[P]>
            : GetScalarType<T[P], APIKeyGroupByOutputType[P]>
        }
      >
    >


  export type APIKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    key?: boolean
    created_at?: boolean
    last_used_at?: boolean
    revoked?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    key?: boolean
    created_at?: boolean
    last_used_at?: boolean
    revoked?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    key?: boolean
    created_at?: boolean
    last_used_at?: boolean
    revoked?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectScalar = {
    id?: boolean
    org_id?: boolean
    key?: boolean
    created_at?: boolean
    last_used_at?: boolean
    revoked?: boolean
  }

  export type APIKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "key" | "created_at" | "last_used_at" | "revoked", ExtArgs["result"]["aPIKey"]>
  export type APIKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type APIKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type APIKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $APIKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "APIKey"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      key: string
      created_at: Date
      last_used_at: Date | null
      revoked: boolean
    }, ExtArgs["result"]["aPIKey"]>
    composites: {}
  }

  type APIKeyGetPayload<S extends boolean | null | undefined | APIKeyDefaultArgs> = $Result.GetResult<Prisma.$APIKeyPayload, S>

  type APIKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<APIKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: APIKeyCountAggregateInputType | true
    }

  export interface APIKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['APIKey'], meta: { name: 'APIKey' } }
    /**
     * Find zero or one APIKey that matches the filter.
     * @param {APIKeyFindUniqueArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends APIKeyFindUniqueArgs>(args: SelectSubset<T, APIKeyFindUniqueArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one APIKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {APIKeyFindUniqueOrThrowArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends APIKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, APIKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindFirstArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends APIKeyFindFirstArgs>(args?: SelectSubset<T, APIKeyFindFirstArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindFirstOrThrowArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends APIKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, APIKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more APIKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all APIKeys
     * const aPIKeys = await prisma.aPIKey.findMany()
     * 
     * // Get first 10 APIKeys
     * const aPIKeys = await prisma.aPIKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends APIKeyFindManyArgs>(args?: SelectSubset<T, APIKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a APIKey.
     * @param {APIKeyCreateArgs} args - Arguments to create a APIKey.
     * @example
     * // Create one APIKey
     * const APIKey = await prisma.aPIKey.create({
     *   data: {
     *     // ... data to create a APIKey
     *   }
     * })
     * 
     */
    create<T extends APIKeyCreateArgs>(args: SelectSubset<T, APIKeyCreateArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many APIKeys.
     * @param {APIKeyCreateManyArgs} args - Arguments to create many APIKeys.
     * @example
     * // Create many APIKeys
     * const aPIKey = await prisma.aPIKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends APIKeyCreateManyArgs>(args?: SelectSubset<T, APIKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many APIKeys and returns the data saved in the database.
     * @param {APIKeyCreateManyAndReturnArgs} args - Arguments to create many APIKeys.
     * @example
     * // Create many APIKeys
     * const aPIKey = await prisma.aPIKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many APIKeys and only return the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends APIKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, APIKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a APIKey.
     * @param {APIKeyDeleteArgs} args - Arguments to delete one APIKey.
     * @example
     * // Delete one APIKey
     * const APIKey = await prisma.aPIKey.delete({
     *   where: {
     *     // ... filter to delete one APIKey
     *   }
     * })
     * 
     */
    delete<T extends APIKeyDeleteArgs>(args: SelectSubset<T, APIKeyDeleteArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one APIKey.
     * @param {APIKeyUpdateArgs} args - Arguments to update one APIKey.
     * @example
     * // Update one APIKey
     * const aPIKey = await prisma.aPIKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends APIKeyUpdateArgs>(args: SelectSubset<T, APIKeyUpdateArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more APIKeys.
     * @param {APIKeyDeleteManyArgs} args - Arguments to filter APIKeys to delete.
     * @example
     * // Delete a few APIKeys
     * const { count } = await prisma.aPIKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends APIKeyDeleteManyArgs>(args?: SelectSubset<T, APIKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many APIKeys
     * const aPIKey = await prisma.aPIKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends APIKeyUpdateManyArgs>(args: SelectSubset<T, APIKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKeys and returns the data updated in the database.
     * @param {APIKeyUpdateManyAndReturnArgs} args - Arguments to update many APIKeys.
     * @example
     * // Update many APIKeys
     * const aPIKey = await prisma.aPIKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more APIKeys and only return the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends APIKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, APIKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one APIKey.
     * @param {APIKeyUpsertArgs} args - Arguments to update or create a APIKey.
     * @example
     * // Update or create a APIKey
     * const aPIKey = await prisma.aPIKey.upsert({
     *   create: {
     *     // ... data to create a APIKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the APIKey we want to update
     *   }
     * })
     */
    upsert<T extends APIKeyUpsertArgs>(args: SelectSubset<T, APIKeyUpsertArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of APIKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyCountArgs} args - Arguments to filter APIKeys to count.
     * @example
     * // Count the number of APIKeys
     * const count = await prisma.aPIKey.count({
     *   where: {
     *     // ... the filter for the APIKeys we want to count
     *   }
     * })
    **/
    count<T extends APIKeyCountArgs>(
      args?: Subset<T, APIKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], APIKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a APIKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends APIKeyAggregateArgs>(args: Subset<T, APIKeyAggregateArgs>): Prisma.PrismaPromise<GetAPIKeyAggregateType<T>>

    /**
     * Group by APIKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends APIKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: APIKeyGroupByArgs['orderBy'] }
        : { orderBy?: APIKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, APIKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAPIKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the APIKey model
   */
  readonly fields: APIKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for APIKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__APIKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the APIKey model
   */
  interface APIKeyFieldRefs {
    readonly id: FieldRef<"APIKey", 'String'>
    readonly org_id: FieldRef<"APIKey", 'String'>
    readonly key: FieldRef<"APIKey", 'String'>
    readonly created_at: FieldRef<"APIKey", 'DateTime'>
    readonly last_used_at: FieldRef<"APIKey", 'DateTime'>
    readonly revoked: FieldRef<"APIKey", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * APIKey findUnique
   */
  export type APIKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey findUniqueOrThrow
   */
  export type APIKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey findFirst
   */
  export type APIKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKeys.
     */
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey findFirstOrThrow
   */
  export type APIKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKeys.
     */
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey findMany
   */
  export type APIKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKeys to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey create
   */
  export type APIKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a APIKey.
     */
    data: XOR<APIKeyCreateInput, APIKeyUncheckedCreateInput>
  }

  /**
   * APIKey createMany
   */
  export type APIKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many APIKeys.
     */
    data: APIKeyCreateManyInput | APIKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * APIKey createManyAndReturn
   */
  export type APIKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data used to create many APIKeys.
     */
    data: APIKeyCreateManyInput | APIKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * APIKey update
   */
  export type APIKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a APIKey.
     */
    data: XOR<APIKeyUpdateInput, APIKeyUncheckedUpdateInput>
    /**
     * Choose, which APIKey to update.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey updateMany
   */
  export type APIKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update APIKeys.
     */
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyInput>
    /**
     * Filter which APIKeys to update
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to update.
     */
    limit?: number
  }

  /**
   * APIKey updateManyAndReturn
   */
  export type APIKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data used to update APIKeys.
     */
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyInput>
    /**
     * Filter which APIKeys to update
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * APIKey upsert
   */
  export type APIKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the APIKey to update in case it exists.
     */
    where: APIKeyWhereUniqueInput
    /**
     * In case the APIKey found by the `where` argument doesn't exist, create a new APIKey with this data.
     */
    create: XOR<APIKeyCreateInput, APIKeyUncheckedCreateInput>
    /**
     * In case the APIKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<APIKeyUpdateInput, APIKeyUncheckedUpdateInput>
  }

  /**
   * APIKey delete
   */
  export type APIKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter which APIKey to delete.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey deleteMany
   */
  export type APIKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKeys to delete
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to delete.
     */
    limit?: number
  }

  /**
   * APIKey without action
   */
  export type APIKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
  }


  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    user_id: string | null
    session_id: string | null
    last_updated: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    user_id: string | null
    session_id: string | null
    last_updated: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    org_id: number
    user_id: number
    session_id: number
    consent_status: number
    last_updated: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    org_id?: true
    user_id?: true
    session_id?: true
    last_updated?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    org_id?: true
    user_id?: true
    session_id?: true
    last_updated?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    org_id?: true
    user_id?: true
    session_id?: true
    consent_status?: true
    last_updated?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: string
    org_id: string
    user_id: string
    session_id: string
    consent_status: JsonValue
    last_updated: Date
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    session_id?: boolean
    consent_status?: boolean
    last_updated?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    session_id?: boolean
    consent_status?: boolean
    last_updated?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    session_id?: boolean
    consent_status?: boolean
    last_updated?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    session_id?: boolean
    consent_status?: boolean
    last_updated?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "user_id" | "session_id" | "consent_status" | "last_updated", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      user_id: string
      session_id: string
      consent_status: Prisma.JsonValue
      last_updated: Date
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'String'>
    readonly org_id: FieldRef<"UserSession", 'String'>
    readonly user_id: FieldRef<"UserSession", 'String'>
    readonly session_id: FieldRef<"UserSession", 'String'>
    readonly consent_status: FieldRef<"UserSession", 'Json'>
    readonly last_updated: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SDKConfigScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    config_json: 'config_json',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SDKConfigScalarFieldEnum = (typeof SDKConfigScalarFieldEnum)[keyof typeof SDKConfigScalarFieldEnum]


  export const APIKeyScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    key: 'key',
    created_at: 'created_at',
    last_used_at: 'last_used_at',
    revoked: 'revoked'
  };

  export type APIKeyScalarFieldEnum = (typeof APIKeyScalarFieldEnum)[keyof typeof APIKeyScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    user_id: 'user_id',
    session_id: 'session_id',
    consent_status: 'consent_status',
    last_updated: 'last_updated'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    created_at?: DateTimeFilter<"Organization"> | Date | string
    updated_at?: DateTimeFilter<"Organization"> | Date | string
    admins?: AdminUserListRelationFilter
    sdkConfigs?: SDKConfigListRelationFilter
    apiKeys?: APIKeyListRelationFilter
    sessions?: UserSessionListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    admins?: AdminUserOrderByRelationAggregateInput
    sdkConfigs?: SDKConfigOrderByRelationAggregateInput
    apiKeys?: APIKeyOrderByRelationAggregateInput
    sessions?: UserSessionOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    created_at?: DateTimeFilter<"Organization"> | Date | string
    updated_at?: DateTimeFilter<"Organization"> | Date | string
    admins?: AdminUserListRelationFilter
    sdkConfigs?: SDKConfigListRelationFilter
    apiKeys?: APIKeyListRelationFilter
    sessions?: UserSessionListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    created_at?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    org_id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    password_hash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    created_at?: DateTimeFilter<"AdminUser"> | Date | string
    updated_at?: DateTimeFilter<"AdminUser"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    org_id?: StringFilter<"AdminUser"> | string
    password_hash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    created_at?: DateTimeFilter<"AdminUser"> | Date | string
    updated_at?: DateTimeFilter<"AdminUser"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    org_id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password_hash?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    created_at?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type SDKConfigWhereInput = {
    AND?: SDKConfigWhereInput | SDKConfigWhereInput[]
    OR?: SDKConfigWhereInput[]
    NOT?: SDKConfigWhereInput | SDKConfigWhereInput[]
    id?: StringFilter<"SDKConfig"> | string
    org_id?: StringFilter<"SDKConfig"> | string
    config_json?: JsonFilter<"SDKConfig">
    is_active?: BoolFilter<"SDKConfig"> | boolean
    created_at?: DateTimeFilter<"SDKConfig"> | Date | string
    updated_at?: DateTimeFilter<"SDKConfig"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type SDKConfigOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    config_json?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type SDKConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SDKConfigWhereInput | SDKConfigWhereInput[]
    OR?: SDKConfigWhereInput[]
    NOT?: SDKConfigWhereInput | SDKConfigWhereInput[]
    org_id?: StringFilter<"SDKConfig"> | string
    config_json?: JsonFilter<"SDKConfig">
    is_active?: BoolFilter<"SDKConfig"> | boolean
    created_at?: DateTimeFilter<"SDKConfig"> | Date | string
    updated_at?: DateTimeFilter<"SDKConfig"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type SDKConfigOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    config_json?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SDKConfigCountOrderByAggregateInput
    _max?: SDKConfigMaxOrderByAggregateInput
    _min?: SDKConfigMinOrderByAggregateInput
  }

  export type SDKConfigScalarWhereWithAggregatesInput = {
    AND?: SDKConfigScalarWhereWithAggregatesInput | SDKConfigScalarWhereWithAggregatesInput[]
    OR?: SDKConfigScalarWhereWithAggregatesInput[]
    NOT?: SDKConfigScalarWhereWithAggregatesInput | SDKConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SDKConfig"> | string
    org_id?: StringWithAggregatesFilter<"SDKConfig"> | string
    config_json?: JsonWithAggregatesFilter<"SDKConfig">
    is_active?: BoolWithAggregatesFilter<"SDKConfig"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"SDKConfig"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SDKConfig"> | Date | string
  }

  export type APIKeyWhereInput = {
    AND?: APIKeyWhereInput | APIKeyWhereInput[]
    OR?: APIKeyWhereInput[]
    NOT?: APIKeyWhereInput | APIKeyWhereInput[]
    id?: StringFilter<"APIKey"> | string
    org_id?: StringFilter<"APIKey"> | string
    key?: StringFilter<"APIKey"> | string
    created_at?: DateTimeFilter<"APIKey"> | Date | string
    last_used_at?: DateTimeNullableFilter<"APIKey"> | Date | string | null
    revoked?: BoolFilter<"APIKey"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type APIKeyOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrderInput | SortOrder
    revoked?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type APIKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: APIKeyWhereInput | APIKeyWhereInput[]
    OR?: APIKeyWhereInput[]
    NOT?: APIKeyWhereInput | APIKeyWhereInput[]
    org_id?: StringFilter<"APIKey"> | string
    created_at?: DateTimeFilter<"APIKey"> | Date | string
    last_used_at?: DateTimeNullableFilter<"APIKey"> | Date | string | null
    revoked?: BoolFilter<"APIKey"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "key">

  export type APIKeyOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrderInput | SortOrder
    revoked?: SortOrder
    _count?: APIKeyCountOrderByAggregateInput
    _max?: APIKeyMaxOrderByAggregateInput
    _min?: APIKeyMinOrderByAggregateInput
  }

  export type APIKeyScalarWhereWithAggregatesInput = {
    AND?: APIKeyScalarWhereWithAggregatesInput | APIKeyScalarWhereWithAggregatesInput[]
    OR?: APIKeyScalarWhereWithAggregatesInput[]
    NOT?: APIKeyScalarWhereWithAggregatesInput | APIKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"APIKey"> | string
    org_id?: StringWithAggregatesFilter<"APIKey"> | string
    key?: StringWithAggregatesFilter<"APIKey"> | string
    created_at?: DateTimeWithAggregatesFilter<"APIKey"> | Date | string
    last_used_at?: DateTimeNullableWithAggregatesFilter<"APIKey"> | Date | string | null
    revoked?: BoolWithAggregatesFilter<"APIKey"> | boolean
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: StringFilter<"UserSession"> | string
    org_id?: StringFilter<"UserSession"> | string
    user_id?: StringFilter<"UserSession"> | string
    session_id?: StringFilter<"UserSession"> | string
    consent_status?: JsonFilter<"UserSession">
    last_updated?: DateTimeFilter<"UserSession"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    consent_status?: SortOrder
    last_updated?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    org_id?: StringFilter<"UserSession"> | string
    user_id?: StringFilter<"UserSession"> | string
    session_id?: StringFilter<"UserSession"> | string
    consent_status?: JsonFilter<"UserSession">
    last_updated?: DateTimeFilter<"UserSession"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    consent_status?: SortOrder
    last_updated?: SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSession"> | string
    org_id?: StringWithAggregatesFilter<"UserSession"> | string
    user_id?: StringWithAggregatesFilter<"UserSession"> | string
    session_id?: StringWithAggregatesFilter<"UserSession"> | string
    consent_status?: JsonWithAggregatesFilter<"UserSession">
    last_updated?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserCreateNestedManyWithoutOrganizationInput
    sdkConfigs?: SDKConfigCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserUncheckedCreateNestedManyWithoutOrganizationInput
    sdkConfigs?: SDKConfigUncheckedCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUpdateManyWithoutOrganizationNestedInput
    sdkConfigs?: SDKConfigUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput
    sdkConfigs?: SDKConfigUncheckedUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    password_hash: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutAdminsInput
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    org_id: string
    email: string
    password_hash: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    org_id: string
    email: string
    password_hash: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SDKConfigCreateInput = {
    id?: string
    config_json: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutSdkConfigsInput
  }

  export type SDKConfigUncheckedCreateInput = {
    id?: string
    org_id: string
    config_json: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SDKConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_json?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutSdkConfigsNestedInput
  }

  export type SDKConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    config_json?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SDKConfigCreateManyInput = {
    id?: string
    org_id: string
    config_json: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SDKConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_json?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SDKConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    config_json?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKeyCreateInput = {
    id?: string
    key: string
    created_at?: Date | string
    last_used_at?: Date | string | null
    revoked?: boolean
    organization: OrganizationCreateNestedOneWithoutApiKeysInput
  }

  export type APIKeyUncheckedCreateInput = {
    id?: string
    org_id: string
    key: string
    created_at?: Date | string
    last_used_at?: Date | string | null
    revoked?: boolean
  }

  export type APIKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revoked?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type APIKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type APIKeyCreateManyInput = {
    id?: string
    org_id: string
    key: string
    created_at?: Date | string
    last_used_at?: Date | string | null
    revoked?: boolean
  }

  export type APIKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type APIKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionCreateInput = {
    id?: string
    user_id: string
    session_id: string
    consent_status: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
    organization: OrganizationCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    org_id: string
    user_id: string
    session_id: string
    consent_status: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type UserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    consent_status?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    consent_status?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionCreateManyInput = {
    id?: string
    org_id: string
    user_id: string
    session_id: string
    consent_status: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type UserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    consent_status?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    consent_status?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserListRelationFilter = {
    every?: AdminUserWhereInput
    some?: AdminUserWhereInput
    none?: AdminUserWhereInput
  }

  export type SDKConfigListRelationFilter = {
    every?: SDKConfigWhereInput
    some?: SDKConfigWhereInput
    none?: SDKConfigWhereInput
  }

  export type APIKeyListRelationFilter = {
    every?: APIKeyWhereInput
    some?: APIKeyWhereInput
    none?: APIKeyWhereInput
  }

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type AdminUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SDKConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type APIKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SDKConfigCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    config_json?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SDKConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SDKConfigMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type APIKeyCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
    revoked?: SortOrder
  }

  export type APIKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
    revoked?: SortOrder
  }

  export type APIKeyMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
    revoked?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    consent_status?: SortOrder
    last_updated?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    last_updated?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    last_updated?: SortOrder
  }

  export type AdminUserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AdminUserCreateWithoutOrganizationInput, AdminUserUncheckedCreateWithoutOrganizationInput> | AdminUserCreateWithoutOrganizationInput[] | AdminUserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutOrganizationInput | AdminUserCreateOrConnectWithoutOrganizationInput[]
    createMany?: AdminUserCreateManyOrganizationInputEnvelope
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
  }

  export type SDKConfigCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SDKConfigCreateWithoutOrganizationInput, SDKConfigUncheckedCreateWithoutOrganizationInput> | SDKConfigCreateWithoutOrganizationInput[] | SDKConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SDKConfigCreateOrConnectWithoutOrganizationInput | SDKConfigCreateOrConnectWithoutOrganizationInput[]
    createMany?: SDKConfigCreateManyOrganizationInputEnvelope
    connect?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
  }

  export type APIKeyCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<APIKeyCreateWithoutOrganizationInput, APIKeyUncheckedCreateWithoutOrganizationInput> | APIKeyCreateWithoutOrganizationInput[] | APIKeyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutOrganizationInput | APIKeyCreateOrConnectWithoutOrganizationInput[]
    createMany?: APIKeyCreateManyOrganizationInputEnvelope
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
  }

  export type UserSessionCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserSessionCreateWithoutOrganizationInput, UserSessionUncheckedCreateWithoutOrganizationInput> | UserSessionCreateWithoutOrganizationInput[] | UserSessionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutOrganizationInput | UserSessionCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserSessionCreateManyOrganizationInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type AdminUserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AdminUserCreateWithoutOrganizationInput, AdminUserUncheckedCreateWithoutOrganizationInput> | AdminUserCreateWithoutOrganizationInput[] | AdminUserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutOrganizationInput | AdminUserCreateOrConnectWithoutOrganizationInput[]
    createMany?: AdminUserCreateManyOrganizationInputEnvelope
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
  }

  export type SDKConfigUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SDKConfigCreateWithoutOrganizationInput, SDKConfigUncheckedCreateWithoutOrganizationInput> | SDKConfigCreateWithoutOrganizationInput[] | SDKConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SDKConfigCreateOrConnectWithoutOrganizationInput | SDKConfigCreateOrConnectWithoutOrganizationInput[]
    createMany?: SDKConfigCreateManyOrganizationInputEnvelope
    connect?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
  }

  export type APIKeyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<APIKeyCreateWithoutOrganizationInput, APIKeyUncheckedCreateWithoutOrganizationInput> | APIKeyCreateWithoutOrganizationInput[] | APIKeyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutOrganizationInput | APIKeyCreateOrConnectWithoutOrganizationInput[]
    createMany?: APIKeyCreateManyOrganizationInputEnvelope
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserSessionCreateWithoutOrganizationInput, UserSessionUncheckedCreateWithoutOrganizationInput> | UserSessionCreateWithoutOrganizationInput[] | UserSessionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutOrganizationInput | UserSessionCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserSessionCreateManyOrganizationInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AdminUserCreateWithoutOrganizationInput, AdminUserUncheckedCreateWithoutOrganizationInput> | AdminUserCreateWithoutOrganizationInput[] | AdminUserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutOrganizationInput | AdminUserCreateOrConnectWithoutOrganizationInput[]
    upsert?: AdminUserUpsertWithWhereUniqueWithoutOrganizationInput | AdminUserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AdminUserCreateManyOrganizationInputEnvelope
    set?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    disconnect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    delete?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    update?: AdminUserUpdateWithWhereUniqueWithoutOrganizationInput | AdminUserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AdminUserUpdateManyWithWhereWithoutOrganizationInput | AdminUserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
  }

  export type SDKConfigUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SDKConfigCreateWithoutOrganizationInput, SDKConfigUncheckedCreateWithoutOrganizationInput> | SDKConfigCreateWithoutOrganizationInput[] | SDKConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SDKConfigCreateOrConnectWithoutOrganizationInput | SDKConfigCreateOrConnectWithoutOrganizationInput[]
    upsert?: SDKConfigUpsertWithWhereUniqueWithoutOrganizationInput | SDKConfigUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SDKConfigCreateManyOrganizationInputEnvelope
    set?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    disconnect?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    delete?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    connect?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    update?: SDKConfigUpdateWithWhereUniqueWithoutOrganizationInput | SDKConfigUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SDKConfigUpdateManyWithWhereWithoutOrganizationInput | SDKConfigUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SDKConfigScalarWhereInput | SDKConfigScalarWhereInput[]
  }

  export type APIKeyUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<APIKeyCreateWithoutOrganizationInput, APIKeyUncheckedCreateWithoutOrganizationInput> | APIKeyCreateWithoutOrganizationInput[] | APIKeyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutOrganizationInput | APIKeyCreateOrConnectWithoutOrganizationInput[]
    upsert?: APIKeyUpsertWithWhereUniqueWithoutOrganizationInput | APIKeyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: APIKeyCreateManyOrganizationInputEnvelope
    set?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    disconnect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    delete?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    update?: APIKeyUpdateWithWhereUniqueWithoutOrganizationInput | APIKeyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: APIKeyUpdateManyWithWhereWithoutOrganizationInput | APIKeyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
  }

  export type UserSessionUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserSessionCreateWithoutOrganizationInput, UserSessionUncheckedCreateWithoutOrganizationInput> | UserSessionCreateWithoutOrganizationInput[] | UserSessionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutOrganizationInput | UserSessionCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutOrganizationInput | UserSessionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserSessionCreateManyOrganizationInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutOrganizationInput | UserSessionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutOrganizationInput | UserSessionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AdminUserCreateWithoutOrganizationInput, AdminUserUncheckedCreateWithoutOrganizationInput> | AdminUserCreateWithoutOrganizationInput[] | AdminUserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdminUserCreateOrConnectWithoutOrganizationInput | AdminUserCreateOrConnectWithoutOrganizationInput[]
    upsert?: AdminUserUpsertWithWhereUniqueWithoutOrganizationInput | AdminUserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AdminUserCreateManyOrganizationInputEnvelope
    set?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    disconnect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    delete?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    connect?: AdminUserWhereUniqueInput | AdminUserWhereUniqueInput[]
    update?: AdminUserUpdateWithWhereUniqueWithoutOrganizationInput | AdminUserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AdminUserUpdateManyWithWhereWithoutOrganizationInput | AdminUserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
  }

  export type SDKConfigUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SDKConfigCreateWithoutOrganizationInput, SDKConfigUncheckedCreateWithoutOrganizationInput> | SDKConfigCreateWithoutOrganizationInput[] | SDKConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SDKConfigCreateOrConnectWithoutOrganizationInput | SDKConfigCreateOrConnectWithoutOrganizationInput[]
    upsert?: SDKConfigUpsertWithWhereUniqueWithoutOrganizationInput | SDKConfigUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SDKConfigCreateManyOrganizationInputEnvelope
    set?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    disconnect?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    delete?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    connect?: SDKConfigWhereUniqueInput | SDKConfigWhereUniqueInput[]
    update?: SDKConfigUpdateWithWhereUniqueWithoutOrganizationInput | SDKConfigUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SDKConfigUpdateManyWithWhereWithoutOrganizationInput | SDKConfigUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SDKConfigScalarWhereInput | SDKConfigScalarWhereInput[]
  }

  export type APIKeyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<APIKeyCreateWithoutOrganizationInput, APIKeyUncheckedCreateWithoutOrganizationInput> | APIKeyCreateWithoutOrganizationInput[] | APIKeyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutOrganizationInput | APIKeyCreateOrConnectWithoutOrganizationInput[]
    upsert?: APIKeyUpsertWithWhereUniqueWithoutOrganizationInput | APIKeyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: APIKeyCreateManyOrganizationInputEnvelope
    set?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    disconnect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    delete?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    update?: APIKeyUpdateWithWhereUniqueWithoutOrganizationInput | APIKeyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: APIKeyUpdateManyWithWhereWithoutOrganizationInput | APIKeyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserSessionCreateWithoutOrganizationInput, UserSessionUncheckedCreateWithoutOrganizationInput> | UserSessionCreateWithoutOrganizationInput[] | UserSessionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutOrganizationInput | UserSessionCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutOrganizationInput | UserSessionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserSessionCreateManyOrganizationInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutOrganizationInput | UserSessionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutOrganizationInput | UserSessionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutAdminsInput = {
    create?: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdminsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdminsInput
    upsert?: OrganizationUpsertWithoutAdminsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAdminsInput, OrganizationUpdateWithoutAdminsInput>, OrganizationUncheckedUpdateWithoutAdminsInput>
  }

  export type OrganizationCreateNestedOneWithoutSdkConfigsInput = {
    create?: XOR<OrganizationCreateWithoutSdkConfigsInput, OrganizationUncheckedCreateWithoutSdkConfigsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSdkConfigsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutSdkConfigsNestedInput = {
    create?: XOR<OrganizationCreateWithoutSdkConfigsInput, OrganizationUncheckedCreateWithoutSdkConfigsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSdkConfigsInput
    upsert?: OrganizationUpsertWithoutSdkConfigsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSdkConfigsInput, OrganizationUpdateWithoutSdkConfigsInput>, OrganizationUncheckedUpdateWithoutSdkConfigsInput>
  }

  export type OrganizationCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApiKeysInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApiKeysInput
    upsert?: OrganizationUpsertWithoutApiKeysInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutApiKeysInput, OrganizationUpdateWithoutApiKeysInput>, OrganizationUncheckedUpdateWithoutApiKeysInput>
  }

  export type OrganizationCreateNestedOneWithoutSessionsInput = {
    create?: XOR<OrganizationCreateWithoutSessionsInput, OrganizationUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSessionsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<OrganizationCreateWithoutSessionsInput, OrganizationUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSessionsInput
    upsert?: OrganizationUpsertWithoutSessionsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSessionsInput, OrganizationUpdateWithoutSessionsInput>, OrganizationUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AdminUserCreateWithoutOrganizationInput = {
    id?: string
    email: string
    password_hash: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    password_hash: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUserCreateOrConnectWithoutOrganizationInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutOrganizationInput, AdminUserUncheckedCreateWithoutOrganizationInput>
  }

  export type AdminUserCreateManyOrganizationInputEnvelope = {
    data: AdminUserCreateManyOrganizationInput | AdminUserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type SDKConfigCreateWithoutOrganizationInput = {
    id?: string
    config_json: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SDKConfigUncheckedCreateWithoutOrganizationInput = {
    id?: string
    config_json: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SDKConfigCreateOrConnectWithoutOrganizationInput = {
    where: SDKConfigWhereUniqueInput
    create: XOR<SDKConfigCreateWithoutOrganizationInput, SDKConfigUncheckedCreateWithoutOrganizationInput>
  }

  export type SDKConfigCreateManyOrganizationInputEnvelope = {
    data: SDKConfigCreateManyOrganizationInput | SDKConfigCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type APIKeyCreateWithoutOrganizationInput = {
    id?: string
    key: string
    created_at?: Date | string
    last_used_at?: Date | string | null
    revoked?: boolean
  }

  export type APIKeyUncheckedCreateWithoutOrganizationInput = {
    id?: string
    key: string
    created_at?: Date | string
    last_used_at?: Date | string | null
    revoked?: boolean
  }

  export type APIKeyCreateOrConnectWithoutOrganizationInput = {
    where: APIKeyWhereUniqueInput
    create: XOR<APIKeyCreateWithoutOrganizationInput, APIKeyUncheckedCreateWithoutOrganizationInput>
  }

  export type APIKeyCreateManyOrganizationInputEnvelope = {
    data: APIKeyCreateManyOrganizationInput | APIKeyCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionCreateWithoutOrganizationInput = {
    id?: string
    user_id: string
    session_id: string
    consent_status: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type UserSessionUncheckedCreateWithoutOrganizationInput = {
    id?: string
    user_id: string
    session_id: string
    consent_status: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type UserSessionCreateOrConnectWithoutOrganizationInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutOrganizationInput, UserSessionUncheckedCreateWithoutOrganizationInput>
  }

  export type UserSessionCreateManyOrganizationInputEnvelope = {
    data: UserSessionCreateManyOrganizationInput | UserSessionCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AdminUserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AdminUserWhereUniqueInput
    update: XOR<AdminUserUpdateWithoutOrganizationInput, AdminUserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AdminUserCreateWithoutOrganizationInput, AdminUserUncheckedCreateWithoutOrganizationInput>
  }

  export type AdminUserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AdminUserWhereUniqueInput
    data: XOR<AdminUserUpdateWithoutOrganizationInput, AdminUserUncheckedUpdateWithoutOrganizationInput>
  }

  export type AdminUserUpdateManyWithWhereWithoutOrganizationInput = {
    where: AdminUserScalarWhereInput
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AdminUserScalarWhereInput = {
    AND?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
    OR?: AdminUserScalarWhereInput[]
    NOT?: AdminUserScalarWhereInput | AdminUserScalarWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    org_id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    password_hash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    created_at?: DateTimeFilter<"AdminUser"> | Date | string
    updated_at?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type SDKConfigUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: SDKConfigWhereUniqueInput
    update: XOR<SDKConfigUpdateWithoutOrganizationInput, SDKConfigUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SDKConfigCreateWithoutOrganizationInput, SDKConfigUncheckedCreateWithoutOrganizationInput>
  }

  export type SDKConfigUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: SDKConfigWhereUniqueInput
    data: XOR<SDKConfigUpdateWithoutOrganizationInput, SDKConfigUncheckedUpdateWithoutOrganizationInput>
  }

  export type SDKConfigUpdateManyWithWhereWithoutOrganizationInput = {
    where: SDKConfigScalarWhereInput
    data: XOR<SDKConfigUpdateManyMutationInput, SDKConfigUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SDKConfigScalarWhereInput = {
    AND?: SDKConfigScalarWhereInput | SDKConfigScalarWhereInput[]
    OR?: SDKConfigScalarWhereInput[]
    NOT?: SDKConfigScalarWhereInput | SDKConfigScalarWhereInput[]
    id?: StringFilter<"SDKConfig"> | string
    org_id?: StringFilter<"SDKConfig"> | string
    config_json?: JsonFilter<"SDKConfig">
    is_active?: BoolFilter<"SDKConfig"> | boolean
    created_at?: DateTimeFilter<"SDKConfig"> | Date | string
    updated_at?: DateTimeFilter<"SDKConfig"> | Date | string
  }

  export type APIKeyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: APIKeyWhereUniqueInput
    update: XOR<APIKeyUpdateWithoutOrganizationInput, APIKeyUncheckedUpdateWithoutOrganizationInput>
    create: XOR<APIKeyCreateWithoutOrganizationInput, APIKeyUncheckedCreateWithoutOrganizationInput>
  }

  export type APIKeyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: APIKeyWhereUniqueInput
    data: XOR<APIKeyUpdateWithoutOrganizationInput, APIKeyUncheckedUpdateWithoutOrganizationInput>
  }

  export type APIKeyUpdateManyWithWhereWithoutOrganizationInput = {
    where: APIKeyScalarWhereInput
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type APIKeyScalarWhereInput = {
    AND?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
    OR?: APIKeyScalarWhereInput[]
    NOT?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
    id?: StringFilter<"APIKey"> | string
    org_id?: StringFilter<"APIKey"> | string
    key?: StringFilter<"APIKey"> | string
    created_at?: DateTimeFilter<"APIKey"> | Date | string
    last_used_at?: DateTimeNullableFilter<"APIKey"> | Date | string | null
    revoked?: BoolFilter<"APIKey"> | boolean
  }

  export type UserSessionUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutOrganizationInput, UserSessionUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserSessionCreateWithoutOrganizationInput, UserSessionUncheckedCreateWithoutOrganizationInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutOrganizationInput, UserSessionUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    OR?: UserSessionScalarWhereInput[]
    NOT?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    id?: StringFilter<"UserSession"> | string
    org_id?: StringFilter<"UserSession"> | string
    user_id?: StringFilter<"UserSession"> | string
    session_id?: StringFilter<"UserSession"> | string
    consent_status?: JsonFilter<"UserSession">
    last_updated?: DateTimeFilter<"UserSession"> | Date | string
  }

  export type OrganizationCreateWithoutAdminsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    sdkConfigs?: SDKConfigCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAdminsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    sdkConfigs?: SDKConfigUncheckedCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAdminsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
  }

  export type OrganizationUpsertWithoutAdminsInput = {
    update: XOR<OrganizationUpdateWithoutAdminsInput, OrganizationUncheckedUpdateWithoutAdminsInput>
    create: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAdminsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAdminsInput, OrganizationUncheckedUpdateWithoutAdminsInput>
  }

  export type OrganizationUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sdkConfigs?: SDKConfigUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sdkConfigs?: SDKConfigUncheckedUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutSdkConfigsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSdkConfigsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserUncheckedCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSdkConfigsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSdkConfigsInput, OrganizationUncheckedCreateWithoutSdkConfigsInput>
  }

  export type OrganizationUpsertWithoutSdkConfigsInput = {
    update: XOR<OrganizationUpdateWithoutSdkConfigsInput, OrganizationUncheckedUpdateWithoutSdkConfigsInput>
    create: XOR<OrganizationCreateWithoutSdkConfigsInput, OrganizationUncheckedCreateWithoutSdkConfigsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSdkConfigsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSdkConfigsInput, OrganizationUncheckedUpdateWithoutSdkConfigsInput>
  }

  export type OrganizationUpdateWithoutSdkConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSdkConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutApiKeysInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserCreateNestedManyWithoutOrganizationInput
    sdkConfigs?: SDKConfigCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutApiKeysInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserUncheckedCreateNestedManyWithoutOrganizationInput
    sdkConfigs?: SDKConfigUncheckedCreateNestedManyWithoutOrganizationInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutApiKeysInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
  }

  export type OrganizationUpsertWithoutApiKeysInput = {
    update: XOR<OrganizationUpdateWithoutApiKeysInput, OrganizationUncheckedUpdateWithoutApiKeysInput>
    create: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutApiKeysInput, OrganizationUncheckedUpdateWithoutApiKeysInput>
  }

  export type OrganizationUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUpdateManyWithoutOrganizationNestedInput
    sdkConfigs?: SDKConfigUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput
    sdkConfigs?: SDKConfigUncheckedUpdateManyWithoutOrganizationNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutSessionsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserCreateNestedManyWithoutOrganizationInput
    sdkConfigs?: SDKConfigCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    admins?: AdminUserUncheckedCreateNestedManyWithoutOrganizationInput
    sdkConfigs?: SDKConfigUncheckedCreateNestedManyWithoutOrganizationInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSessionsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSessionsInput, OrganizationUncheckedCreateWithoutSessionsInput>
  }

  export type OrganizationUpsertWithoutSessionsInput = {
    update: XOR<OrganizationUpdateWithoutSessionsInput, OrganizationUncheckedUpdateWithoutSessionsInput>
    create: XOR<OrganizationCreateWithoutSessionsInput, OrganizationUncheckedCreateWithoutSessionsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSessionsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSessionsInput, OrganizationUncheckedUpdateWithoutSessionsInput>
  }

  export type OrganizationUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUpdateManyWithoutOrganizationNestedInput
    sdkConfigs?: SDKConfigUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUserUncheckedUpdateManyWithoutOrganizationNestedInput
    sdkConfigs?: SDKConfigUncheckedUpdateManyWithoutOrganizationNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AdminUserCreateManyOrganizationInput = {
    id?: string
    email: string
    password_hash: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SDKConfigCreateManyOrganizationInput = {
    id?: string
    config_json: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type APIKeyCreateManyOrganizationInput = {
    id?: string
    key: string
    created_at?: Date | string
    last_used_at?: Date | string | null
    revoked?: boolean
  }

  export type UserSessionCreateManyOrganizationInput = {
    id?: string
    user_id: string
    session_id: string
    consent_status: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
  }

  export type AdminUserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SDKConfigUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_json?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SDKConfigUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_json?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SDKConfigUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_json?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKeyUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type APIKeyUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type APIKeyUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    consent_status?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    consent_status?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    consent_status?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}