
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
 * Model alembic_version
 * 
 */
export type alembic_version = $Result.DefaultSelection<Prisma.$alembic_versionPayload>
/**
 * Model badge
 * 
 */
export type badge = $Result.DefaultSelection<Prisma.$badgePayload>
/**
 * Model choice
 * 
 */
export type choice = $Result.DefaultSelection<Prisma.$choicePayload>
/**
 * Model doctrine_migration_versions
 * 
 */
export type doctrine_migration_versions = $Result.DefaultSelection<Prisma.$doctrine_migration_versionsPayload>
/**
 * Model game
 * 
 */
export type game = $Result.DefaultSelection<Prisma.$gamePayload>
/**
 * Model league
 * 
 */
export type league = $Result.DefaultSelection<Prisma.$leaguePayload>
/**
 * Model player
 * 
 */
export type player = $Result.DefaultSelection<Prisma.$playerPayload>
/**
 * Model player_choice
 * 
 */
export type player_choice = $Result.DefaultSelection<Prisma.$player_choicePayload>
/**
 * Model player_rate
 * 
 */
export type player_rate = $Result.DefaultSelection<Prisma.$player_ratePayload>
/**
 * Model team
 * 
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>
/**
 * Model user
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model week
 * 
 */
export type week = $Result.DefaultSelection<Prisma.$weekPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alembic_versions
 * const alembic_versions = await prisma.alembic_version.findMany()
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
   * // Fetch zero or more Alembic_versions
   * const alembic_versions = await prisma.alembic_version.findMany()
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
   * `prisma.alembic_version`: Exposes CRUD operations for the **alembic_version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alembic_versions
    * const alembic_versions = await prisma.alembic_version.findMany()
    * ```
    */
  get alembic_version(): Prisma.alembic_versionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.badgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choice`: Exposes CRUD operations for the **choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.choiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctrine_migration_versions`: Exposes CRUD operations for the **doctrine_migration_versions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctrine_migration_versions
    * const doctrine_migration_versions = await prisma.doctrine_migration_versions.findMany()
    * ```
    */
  get doctrine_migration_versions(): Prisma.doctrine_migration_versionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.gameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.league`: Exposes CRUD operations for the **league** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leagues
    * const leagues = await prisma.league.findMany()
    * ```
    */
  get league(): Prisma.leagueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.playerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player_choice`: Exposes CRUD operations for the **player_choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Player_choices
    * const player_choices = await prisma.player_choice.findMany()
    * ```
    */
  get player_choice(): Prisma.player_choiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player_rate`: Exposes CRUD operations for the **player_rate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Player_rates
    * const player_rates = await prisma.player_rate.findMany()
    * ```
    */
  get player_rate(): Prisma.player_rateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.teamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.week`: Exposes CRUD operations for the **week** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weeks
    * const weeks = await prisma.week.findMany()
    * ```
    */
  get week(): Prisma.weekDelegate<ExtArgs, ClientOptions>;
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
    alembic_version: 'alembic_version',
    badge: 'badge',
    choice: 'choice',
    doctrine_migration_versions: 'doctrine_migration_versions',
    game: 'game',
    league: 'league',
    player: 'player',
    player_choice: 'player_choice',
    player_rate: 'player_rate',
    team: 'team',
    user: 'user',
    week: 'week'
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
      modelProps: "alembic_version" | "badge" | "choice" | "doctrine_migration_versions" | "game" | "league" | "player" | "player_choice" | "player_rate" | "team" | "user" | "week"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alembic_version: {
        payload: Prisma.$alembic_versionPayload<ExtArgs>
        fields: Prisma.alembic_versionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alembic_versionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alembic_versionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          findFirst: {
            args: Prisma.alembic_versionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alembic_versionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          findMany: {
            args: Prisma.alembic_versionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>[]
          }
          create: {
            args: Prisma.alembic_versionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          createMany: {
            args: Prisma.alembic_versionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alembic_versionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          update: {
            args: Prisma.alembic_versionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          deleteMany: {
            args: Prisma.alembic_versionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alembic_versionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alembic_versionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alembic_versionPayload>
          }
          aggregate: {
            args: Prisma.Alembic_versionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlembic_version>
          }
          groupBy: {
            args: Prisma.alembic_versionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Alembic_versionGroupByOutputType>[]
          }
          count: {
            args: Prisma.alembic_versionCountArgs<ExtArgs>
            result: $Utils.Optional<Alembic_versionCountAggregateOutputType> | number
          }
        }
      }
      badge: {
        payload: Prisma.$badgePayload<ExtArgs>
        fields: Prisma.badgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.badgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.badgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload>
          }
          findFirst: {
            args: Prisma.badgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.badgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload>
          }
          findMany: {
            args: Prisma.badgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload>[]
          }
          create: {
            args: Prisma.badgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload>
          }
          createMany: {
            args: Prisma.badgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.badgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload>
          }
          update: {
            args: Prisma.badgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload>
          }
          deleteMany: {
            args: Prisma.badgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.badgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.badgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.badgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.badgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      choice: {
        payload: Prisma.$choicePayload<ExtArgs>
        fields: Prisma.choiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.choiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.choiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          findFirst: {
            args: Prisma.choiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.choiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          findMany: {
            args: Prisma.choiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>[]
          }
          create: {
            args: Prisma.choiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          createMany: {
            args: Prisma.choiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.choiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          update: {
            args: Prisma.choiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          deleteMany: {
            args: Prisma.choiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.choiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.choiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          aggregate: {
            args: Prisma.ChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoice>
          }
          groupBy: {
            args: Prisma.choiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.choiceCountArgs<ExtArgs>
            result: $Utils.Optional<ChoiceCountAggregateOutputType> | number
          }
        }
      }
      doctrine_migration_versions: {
        payload: Prisma.$doctrine_migration_versionsPayload<ExtArgs>
        fields: Prisma.doctrine_migration_versionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctrine_migration_versionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctrine_migration_versionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>
          }
          findFirst: {
            args: Prisma.doctrine_migration_versionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctrine_migration_versionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>
          }
          findMany: {
            args: Prisma.doctrine_migration_versionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>[]
          }
          create: {
            args: Prisma.doctrine_migration_versionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>
          }
          createMany: {
            args: Prisma.doctrine_migration_versionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.doctrine_migration_versionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>
          }
          update: {
            args: Prisma.doctrine_migration_versionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>
          }
          deleteMany: {
            args: Prisma.doctrine_migration_versionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctrine_migration_versionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.doctrine_migration_versionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctrine_migration_versionsPayload>
          }
          aggregate: {
            args: Prisma.Doctrine_migration_versionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctrine_migration_versions>
          }
          groupBy: {
            args: Prisma.doctrine_migration_versionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Doctrine_migration_versionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctrine_migration_versionsCountArgs<ExtArgs>
            result: $Utils.Optional<Doctrine_migration_versionsCountAggregateOutputType> | number
          }
        }
      }
      game: {
        payload: Prisma.$gamePayload<ExtArgs>
        fields: Prisma.gameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findFirst: {
            args: Prisma.gameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findMany: {
            args: Prisma.gameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[]
          }
          create: {
            args: Prisma.gameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          createMany: {
            args: Prisma.gameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          update: {
            args: Prisma.gameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          deleteMany: {
            args: Prisma.gameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.gameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.gameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      league: {
        payload: Prisma.$leaguePayload<ExtArgs>
        fields: Prisma.leagueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leagueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leagueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload>
          }
          findFirst: {
            args: Prisma.leagueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leagueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload>
          }
          findMany: {
            args: Prisma.leagueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload>[]
          }
          create: {
            args: Prisma.leagueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload>
          }
          createMany: {
            args: Prisma.leagueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.leagueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload>
          }
          update: {
            args: Prisma.leagueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload>
          }
          deleteMany: {
            args: Prisma.leagueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leagueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.leagueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leaguePayload>
          }
          aggregate: {
            args: Prisma.LeagueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeague>
          }
          groupBy: {
            args: Prisma.leagueGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeagueGroupByOutputType>[]
          }
          count: {
            args: Prisma.leagueCountArgs<ExtArgs>
            result: $Utils.Optional<LeagueCountAggregateOutputType> | number
          }
        }
      }
      player: {
        payload: Prisma.$playerPayload<ExtArgs>
        fields: Prisma.playerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          findFirst: {
            args: Prisma.playerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          findMany: {
            args: Prisma.playerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>[]
          }
          create: {
            args: Prisma.playerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          createMany: {
            args: Prisma.playerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.playerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          update: {
            args: Prisma.playerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          deleteMany: {
            args: Prisma.playerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.playerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.playerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      player_choice: {
        payload: Prisma.$player_choicePayload<ExtArgs>
        fields: Prisma.player_choiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.player_choiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.player_choiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload>
          }
          findFirst: {
            args: Prisma.player_choiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.player_choiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload>
          }
          findMany: {
            args: Prisma.player_choiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload>[]
          }
          create: {
            args: Prisma.player_choiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload>
          }
          createMany: {
            args: Prisma.player_choiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.player_choiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload>
          }
          update: {
            args: Prisma.player_choiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload>
          }
          deleteMany: {
            args: Prisma.player_choiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.player_choiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.player_choiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_choicePayload>
          }
          aggregate: {
            args: Prisma.Player_choiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer_choice>
          }
          groupBy: {
            args: Prisma.player_choiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Player_choiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.player_choiceCountArgs<ExtArgs>
            result: $Utils.Optional<Player_choiceCountAggregateOutputType> | number
          }
        }
      }
      player_rate: {
        payload: Prisma.$player_ratePayload<ExtArgs>
        fields: Prisma.player_rateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.player_rateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.player_rateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload>
          }
          findFirst: {
            args: Prisma.player_rateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.player_rateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload>
          }
          findMany: {
            args: Prisma.player_rateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload>[]
          }
          create: {
            args: Prisma.player_rateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload>
          }
          createMany: {
            args: Prisma.player_rateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.player_rateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload>
          }
          update: {
            args: Prisma.player_rateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload>
          }
          deleteMany: {
            args: Prisma.player_rateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.player_rateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.player_rateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_ratePayload>
          }
          aggregate: {
            args: Prisma.Player_rateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer_rate>
          }
          groupBy: {
            args: Prisma.player_rateGroupByArgs<ExtArgs>
            result: $Utils.Optional<Player_rateGroupByOutputType>[]
          }
          count: {
            args: Prisma.player_rateCountArgs<ExtArgs>
            result: $Utils.Optional<Player_rateCountAggregateOutputType> | number
          }
        }
      }
      team: {
        payload: Prisma.$teamPayload<ExtArgs>
        fields: Prisma.teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      week: {
        payload: Prisma.$weekPayload<ExtArgs>
        fields: Prisma.weekFieldRefs
        operations: {
          findUnique: {
            args: Prisma.weekFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.weekFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload>
          }
          findFirst: {
            args: Prisma.weekFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.weekFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload>
          }
          findMany: {
            args: Prisma.weekFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload>[]
          }
          create: {
            args: Prisma.weekCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload>
          }
          createMany: {
            args: Prisma.weekCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.weekDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload>
          }
          update: {
            args: Prisma.weekUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload>
          }
          deleteMany: {
            args: Prisma.weekDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.weekUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.weekUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekPayload>
          }
          aggregate: {
            args: Prisma.WeekAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeek>
          }
          groupBy: {
            args: Prisma.weekGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeekGroupByOutputType>[]
          }
          count: {
            args: Prisma.weekCountArgs<ExtArgs>
            result: $Utils.Optional<WeekCountAggregateOutputType> | number
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
    alembic_version?: alembic_versionOmit
    badge?: badgeOmit
    choice?: choiceOmit
    doctrine_migration_versions?: doctrine_migration_versionsOmit
    game?: gameOmit
    league?: leagueOmit
    player?: playerOmit
    player_choice?: player_choiceOmit
    player_rate?: player_rateOmit
    team?: teamOmit
    user?: userOmit
    week?: weekOmit
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
   * Count Type ChoiceCountOutputType
   */

  export type ChoiceCountOutputType = {
    player_choice: number
  }

  export type ChoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_choice?: boolean | ChoiceCountOutputTypeCountPlayer_choiceArgs
  }

  // Custom InputTypes
  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoiceCountOutputType
     */
    select?: ChoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeCountPlayer_choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_choiceWhereInput
  }


  /**
   * Count Type LeagueCountOutputType
   */

  export type LeagueCountOutputType = {
    team: number
    week: number
  }

  export type LeagueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | LeagueCountOutputTypeCountTeamArgs
    week?: boolean | LeagueCountOutputTypeCountWeekArgs
  }

  // Custom InputTypes
  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueCountOutputType
     */
    select?: LeagueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountWeekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weekWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    choice: number
    player_choice: number
    player_rate: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choice?: boolean | PlayerCountOutputTypeCountChoiceArgs
    player_choice?: boolean | PlayerCountOutputTypeCountPlayer_choiceArgs
    player_rate?: boolean | PlayerCountOutputTypeCountPlayer_rateArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountChoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choiceWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPlayer_choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_choiceWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPlayer_rateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_rateWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    home_games: number
    away_games: number
    players: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_games?: boolean | TeamCountOutputTypeCountHome_gamesArgs
    away_games?: boolean | TeamCountOutputTypeCountAway_gamesArgs
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHome_gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAway_gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playerWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    choice: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choice?: boolean | UserCountOutputTypeCountChoiceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choiceWhereInput
  }


  /**
   * Count Type WeekCountOutputType
   */

  export type WeekCountOutputType = {
    choice: number
    game: number
    player_rate: number
  }

  export type WeekCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choice?: boolean | WeekCountOutputTypeCountChoiceArgs
    game?: boolean | WeekCountOutputTypeCountGameArgs
    player_rate?: boolean | WeekCountOutputTypeCountPlayer_rateArgs
  }

  // Custom InputTypes
  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekCountOutputType
     */
    select?: WeekCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeCountChoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choiceWhereInput
  }

  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
  }

  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeCountPlayer_rateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_rateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alembic_version
   */

  export type AggregateAlembic_version = {
    _count: Alembic_versionCountAggregateOutputType | null
    _min: Alembic_versionMinAggregateOutputType | null
    _max: Alembic_versionMaxAggregateOutputType | null
  }

  export type Alembic_versionMinAggregateOutputType = {
    version_num: string | null
  }

  export type Alembic_versionMaxAggregateOutputType = {
    version_num: string | null
  }

  export type Alembic_versionCountAggregateOutputType = {
    version_num: number
    _all: number
  }


  export type Alembic_versionMinAggregateInputType = {
    version_num?: true
  }

  export type Alembic_versionMaxAggregateInputType = {
    version_num?: true
  }

  export type Alembic_versionCountAggregateInputType = {
    version_num?: true
    _all?: true
  }

  export type Alembic_versionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alembic_version to aggregate.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alembic_versions
    **/
    _count?: true | Alembic_versionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Alembic_versionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Alembic_versionMaxAggregateInputType
  }

  export type GetAlembic_versionAggregateType<T extends Alembic_versionAggregateArgs> = {
        [P in keyof T & keyof AggregateAlembic_version]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlembic_version[P]>
      : GetScalarType<T[P], AggregateAlembic_version[P]>
  }




  export type alembic_versionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alembic_versionWhereInput
    orderBy?: alembic_versionOrderByWithAggregationInput | alembic_versionOrderByWithAggregationInput[]
    by: Alembic_versionScalarFieldEnum[] | Alembic_versionScalarFieldEnum
    having?: alembic_versionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Alembic_versionCountAggregateInputType | true
    _min?: Alembic_versionMinAggregateInputType
    _max?: Alembic_versionMaxAggregateInputType
  }

  export type Alembic_versionGroupByOutputType = {
    version_num: string
    _count: Alembic_versionCountAggregateOutputType | null
    _min: Alembic_versionMinAggregateOutputType | null
    _max: Alembic_versionMaxAggregateOutputType | null
  }

  type GetAlembic_versionGroupByPayload<T extends alembic_versionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Alembic_versionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Alembic_versionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Alembic_versionGroupByOutputType[P]>
            : GetScalarType<T[P], Alembic_versionGroupByOutputType[P]>
        }
      >
    >


  export type alembic_versionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version_num?: boolean
  }, ExtArgs["result"]["alembic_version"]>



  export type alembic_versionSelectScalar = {
    version_num?: boolean
  }

  export type alembic_versionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"version_num", ExtArgs["result"]["alembic_version"]>

  export type $alembic_versionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alembic_version"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      version_num: string
    }, ExtArgs["result"]["alembic_version"]>
    composites: {}
  }

  type alembic_versionGetPayload<S extends boolean | null | undefined | alembic_versionDefaultArgs> = $Result.GetResult<Prisma.$alembic_versionPayload, S>

  type alembic_versionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alembic_versionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Alembic_versionCountAggregateInputType | true
    }

  export interface alembic_versionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alembic_version'], meta: { name: 'alembic_version' } }
    /**
     * Find zero or one Alembic_version that matches the filter.
     * @param {alembic_versionFindUniqueArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alembic_versionFindUniqueArgs>(args: SelectSubset<T, alembic_versionFindUniqueArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alembic_version that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alembic_versionFindUniqueOrThrowArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alembic_versionFindUniqueOrThrowArgs>(args: SelectSubset<T, alembic_versionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alembic_version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindFirstArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alembic_versionFindFirstArgs>(args?: SelectSubset<T, alembic_versionFindFirstArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alembic_version that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindFirstOrThrowArgs} args - Arguments to find a Alembic_version
     * @example
     * // Get one Alembic_version
     * const alembic_version = await prisma.alembic_version.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alembic_versionFindFirstOrThrowArgs>(args?: SelectSubset<T, alembic_versionFindFirstOrThrowArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alembic_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alembic_versions
     * const alembic_versions = await prisma.alembic_version.findMany()
     * 
     * // Get first 10 Alembic_versions
     * const alembic_versions = await prisma.alembic_version.findMany({ take: 10 })
     * 
     * // Only select the `version_num`
     * const alembic_versionWithVersion_numOnly = await prisma.alembic_version.findMany({ select: { version_num: true } })
     * 
     */
    findMany<T extends alembic_versionFindManyArgs>(args?: SelectSubset<T, alembic_versionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alembic_version.
     * @param {alembic_versionCreateArgs} args - Arguments to create a Alembic_version.
     * @example
     * // Create one Alembic_version
     * const Alembic_version = await prisma.alembic_version.create({
     *   data: {
     *     // ... data to create a Alembic_version
     *   }
     * })
     * 
     */
    create<T extends alembic_versionCreateArgs>(args: SelectSubset<T, alembic_versionCreateArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alembic_versions.
     * @param {alembic_versionCreateManyArgs} args - Arguments to create many Alembic_versions.
     * @example
     * // Create many Alembic_versions
     * const alembic_version = await prisma.alembic_version.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alembic_versionCreateManyArgs>(args?: SelectSubset<T, alembic_versionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alembic_version.
     * @param {alembic_versionDeleteArgs} args - Arguments to delete one Alembic_version.
     * @example
     * // Delete one Alembic_version
     * const Alembic_version = await prisma.alembic_version.delete({
     *   where: {
     *     // ... filter to delete one Alembic_version
     *   }
     * })
     * 
     */
    delete<T extends alembic_versionDeleteArgs>(args: SelectSubset<T, alembic_versionDeleteArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alembic_version.
     * @param {alembic_versionUpdateArgs} args - Arguments to update one Alembic_version.
     * @example
     * // Update one Alembic_version
     * const alembic_version = await prisma.alembic_version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alembic_versionUpdateArgs>(args: SelectSubset<T, alembic_versionUpdateArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alembic_versions.
     * @param {alembic_versionDeleteManyArgs} args - Arguments to filter Alembic_versions to delete.
     * @example
     * // Delete a few Alembic_versions
     * const { count } = await prisma.alembic_version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alembic_versionDeleteManyArgs>(args?: SelectSubset<T, alembic_versionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alembic_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alembic_versions
     * const alembic_version = await prisma.alembic_version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alembic_versionUpdateManyArgs>(args: SelectSubset<T, alembic_versionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alembic_version.
     * @param {alembic_versionUpsertArgs} args - Arguments to update or create a Alembic_version.
     * @example
     * // Update or create a Alembic_version
     * const alembic_version = await prisma.alembic_version.upsert({
     *   create: {
     *     // ... data to create a Alembic_version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alembic_version we want to update
     *   }
     * })
     */
    upsert<T extends alembic_versionUpsertArgs>(args: SelectSubset<T, alembic_versionUpsertArgs<ExtArgs>>): Prisma__alembic_versionClient<$Result.GetResult<Prisma.$alembic_versionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alembic_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionCountArgs} args - Arguments to filter Alembic_versions to count.
     * @example
     * // Count the number of Alembic_versions
     * const count = await prisma.alembic_version.count({
     *   where: {
     *     // ... the filter for the Alembic_versions we want to count
     *   }
     * })
    **/
    count<T extends alembic_versionCountArgs>(
      args?: Subset<T, alembic_versionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Alembic_versionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alembic_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alembic_versionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alembic_versionAggregateArgs>(args: Subset<T, Alembic_versionAggregateArgs>): Prisma.PrismaPromise<GetAlembic_versionAggregateType<T>>

    /**
     * Group by Alembic_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alembic_versionGroupByArgs} args - Group by arguments.
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
      T extends alembic_versionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alembic_versionGroupByArgs['orderBy'] }
        : { orderBy?: alembic_versionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alembic_versionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlembic_versionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alembic_version model
   */
  readonly fields: alembic_versionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alembic_version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alembic_versionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the alembic_version model
   */
  interface alembic_versionFieldRefs {
    readonly version_num: FieldRef<"alembic_version", 'String'>
  }
    

  // Custom InputTypes
  /**
   * alembic_version findUnique
   */
  export type alembic_versionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version findUniqueOrThrow
   */
  export type alembic_versionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version findFirst
   */
  export type alembic_versionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alembic_versions.
     */
    distinct?: Alembic_versionScalarFieldEnum | Alembic_versionScalarFieldEnum[]
  }

  /**
   * alembic_version findFirstOrThrow
   */
  export type alembic_versionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_version to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alembic_versions.
     */
    distinct?: Alembic_versionScalarFieldEnum | Alembic_versionScalarFieldEnum[]
  }

  /**
   * alembic_version findMany
   */
  export type alembic_versionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter, which alembic_versions to fetch.
     */
    where?: alembic_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alembic_versions to fetch.
     */
    orderBy?: alembic_versionOrderByWithRelationInput | alembic_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alembic_versions.
     */
    cursor?: alembic_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alembic_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alembic_versions.
     */
    skip?: number
    distinct?: Alembic_versionScalarFieldEnum | Alembic_versionScalarFieldEnum[]
  }

  /**
   * alembic_version create
   */
  export type alembic_versionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The data needed to create a alembic_version.
     */
    data: XOR<alembic_versionCreateInput, alembic_versionUncheckedCreateInput>
  }

  /**
   * alembic_version createMany
   */
  export type alembic_versionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alembic_versions.
     */
    data: alembic_versionCreateManyInput | alembic_versionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alembic_version update
   */
  export type alembic_versionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The data needed to update a alembic_version.
     */
    data: XOR<alembic_versionUpdateInput, alembic_versionUncheckedUpdateInput>
    /**
     * Choose, which alembic_version to update.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version updateMany
   */
  export type alembic_versionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alembic_versions.
     */
    data: XOR<alembic_versionUpdateManyMutationInput, alembic_versionUncheckedUpdateManyInput>
    /**
     * Filter which alembic_versions to update
     */
    where?: alembic_versionWhereInput
    /**
     * Limit how many alembic_versions to update.
     */
    limit?: number
  }

  /**
   * alembic_version upsert
   */
  export type alembic_versionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * The filter to search for the alembic_version to update in case it exists.
     */
    where: alembic_versionWhereUniqueInput
    /**
     * In case the alembic_version found by the `where` argument doesn't exist, create a new alembic_version with this data.
     */
    create: XOR<alembic_versionCreateInput, alembic_versionUncheckedCreateInput>
    /**
     * In case the alembic_version was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alembic_versionUpdateInput, alembic_versionUncheckedUpdateInput>
  }

  /**
   * alembic_version delete
   */
  export type alembic_versionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
    /**
     * Filter which alembic_version to delete.
     */
    where: alembic_versionWhereUniqueInput
  }

  /**
   * alembic_version deleteMany
   */
  export type alembic_versionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alembic_versions to delete
     */
    where?: alembic_versionWhereInput
    /**
     * Limit how many alembic_versions to delete.
     */
    limit?: number
  }

  /**
   * alembic_version without action
   */
  export type alembic_versionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alembic_version
     */
    select?: alembic_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alembic_version
     */
    omit?: alembic_versionOmit<ExtArgs> | null
  }


  /**
   * Model badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BadgeSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BadgeSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which badge to aggregate.
     */
    where?: badgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badges to fetch.
     */
    orderBy?: badgeOrderByWithRelationInput | badgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: badgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type badgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: badgeWhereInput
    orderBy?: badgeOrderByWithAggregationInput | badgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: badgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: number
    user_id: number | null
    name: string
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends badgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type badgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    user?: boolean | badge$userArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>



  export type badgeSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
  }

  export type badgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name", ExtArgs["result"]["badge"]>
  export type badgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | badge$userArgs<ExtArgs>
  }

  export type $badgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "badge"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      name: string
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type badgeGetPayload<S extends boolean | null | undefined | badgeDefaultArgs> = $Result.GetResult<Prisma.$badgePayload, S>

  type badgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<badgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface badgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['badge'], meta: { name: 'badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {badgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends badgeFindUniqueArgs>(args: SelectSubset<T, badgeFindUniqueArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {badgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends badgeFindUniqueOrThrowArgs>(args: SelectSubset<T, badgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends badgeFindFirstArgs>(args?: SelectSubset<T, badgeFindFirstArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends badgeFindFirstOrThrowArgs>(args?: SelectSubset<T, badgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends badgeFindManyArgs>(args?: SelectSubset<T, badgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {badgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends badgeCreateArgs>(args: SelectSubset<T, badgeCreateArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {badgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends badgeCreateManyArgs>(args?: SelectSubset<T, badgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Badge.
     * @param {badgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends badgeDeleteArgs>(args: SelectSubset<T, badgeDeleteArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {badgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends badgeUpdateArgs>(args: SelectSubset<T, badgeUpdateArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {badgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends badgeDeleteManyArgs>(args?: SelectSubset<T, badgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends badgeUpdateManyArgs>(args: SelectSubset<T, badgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {badgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends badgeUpsertArgs>(args: SelectSubset<T, badgeUpsertArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends badgeCountArgs>(
      args?: Subset<T, badgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeGroupByArgs} args - Group by arguments.
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
      T extends badgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: badgeGroupByArgs['orderBy'] }
        : { orderBy?: badgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, badgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the badge model
   */
  readonly fields: badgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__badgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends badge$userArgs<ExtArgs> = {}>(args?: Subset<T, badge$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the badge model
   */
  interface badgeFieldRefs {
    readonly id: FieldRef<"badge", 'Int'>
    readonly user_id: FieldRef<"badge", 'Int'>
    readonly name: FieldRef<"badge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * badge findUnique
   */
  export type badgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * Filter, which badge to fetch.
     */
    where: badgeWhereUniqueInput
  }

  /**
   * badge findUniqueOrThrow
   */
  export type badgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * Filter, which badge to fetch.
     */
    where: badgeWhereUniqueInput
  }

  /**
   * badge findFirst
   */
  export type badgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * Filter, which badge to fetch.
     */
    where?: badgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badges to fetch.
     */
    orderBy?: badgeOrderByWithRelationInput | badgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for badges.
     */
    cursor?: badgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * badge findFirstOrThrow
   */
  export type badgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * Filter, which badge to fetch.
     */
    where?: badgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badges to fetch.
     */
    orderBy?: badgeOrderByWithRelationInput | badgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for badges.
     */
    cursor?: badgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * badge findMany
   */
  export type badgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * Filter, which badges to fetch.
     */
    where?: badgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badges to fetch.
     */
    orderBy?: badgeOrderByWithRelationInput | badgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing badges.
     */
    cursor?: badgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * badge create
   */
  export type badgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * The data needed to create a badge.
     */
    data: XOR<badgeCreateInput, badgeUncheckedCreateInput>
  }

  /**
   * badge createMany
   */
  export type badgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many badges.
     */
    data: badgeCreateManyInput | badgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * badge update
   */
  export type badgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * The data needed to update a badge.
     */
    data: XOR<badgeUpdateInput, badgeUncheckedUpdateInput>
    /**
     * Choose, which badge to update.
     */
    where: badgeWhereUniqueInput
  }

  /**
   * badge updateMany
   */
  export type badgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update badges.
     */
    data: XOR<badgeUpdateManyMutationInput, badgeUncheckedUpdateManyInput>
    /**
     * Filter which badges to update
     */
    where?: badgeWhereInput
    /**
     * Limit how many badges to update.
     */
    limit?: number
  }

  /**
   * badge upsert
   */
  export type badgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * The filter to search for the badge to update in case it exists.
     */
    where: badgeWhereUniqueInput
    /**
     * In case the badge found by the `where` argument doesn't exist, create a new badge with this data.
     */
    create: XOR<badgeCreateInput, badgeUncheckedCreateInput>
    /**
     * In case the badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<badgeUpdateInput, badgeUncheckedUpdateInput>
  }

  /**
   * badge delete
   */
  export type badgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    /**
     * Filter which badge to delete.
     */
    where: badgeWhereUniqueInput
  }

  /**
   * badge deleteMany
   */
  export type badgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which badges to delete
     */
    where?: badgeWhereInput
    /**
     * Limit how many badges to delete.
     */
    limit?: number
  }

  /**
   * badge.user
   */
  export type badge$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * badge without action
   */
  export type badgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
  }


  /**
   * Model choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceAvgAggregateOutputType = {
    id: number | null
    week_id: number | null
    user_id: number | null
    player_id: number | null
    points: number | null
  }

  export type ChoiceSumAggregateOutputType = {
    id: number | null
    week_id: number | null
    user_id: number | null
    player_id: number | null
    points: number | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: number | null
    week_id: number | null
    user_id: number | null
    player_id: number | null
    points: number | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: number | null
    week_id: number | null
    user_id: number | null
    player_id: number | null
    points: number | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    week_id: number
    user_id: number
    player_id: number
    points: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    id?: true
    week_id?: true
    user_id?: true
    player_id?: true
    points?: true
  }

  export type ChoiceSumAggregateInputType = {
    id?: true
    week_id?: true
    user_id?: true
    player_id?: true
    points?: true
  }

  export type ChoiceMinAggregateInputType = {
    id?: true
    week_id?: true
    user_id?: true
    player_id?: true
    points?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    week_id?: true
    user_id?: true
    player_id?: true
    points?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    week_id?: true
    user_id?: true
    player_id?: true
    points?: true
    _all?: true
  }

  export type ChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which choice to aggregate.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type choiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choiceWhereInput
    orderBy?: choiceOrderByWithAggregationInput | choiceOrderByWithAggregationInput[]
    by: ChoiceScalarFieldEnum[] | ChoiceScalarFieldEnum
    having?: choiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _avg?: ChoiceAvgAggregateInputType
    _sum?: ChoiceSumAggregateInputType
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }

  export type ChoiceGroupByOutputType = {
    id: number
    week_id: number
    user_id: number
    player_id: number
    points: number | null
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends choiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type choiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week_id?: boolean
    user_id?: boolean
    player_id?: boolean
    points?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    week?: boolean | weekDefaultArgs<ExtArgs>
    player_choice?: boolean | choice$player_choiceArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>



  export type choiceSelectScalar = {
    id?: boolean
    week_id?: boolean
    user_id?: boolean
    player_id?: boolean
    points?: boolean
  }

  export type choiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "week_id" | "user_id" | "player_id" | "points", ExtArgs["result"]["choice"]>
  export type choiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    week?: boolean | weekDefaultArgs<ExtArgs>
    player_choice?: boolean | choice$player_choiceArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $choicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "choice"
    objects: {
      player: Prisma.$playerPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      week: Prisma.$weekPayload<ExtArgs>
      player_choice: Prisma.$player_choicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      week_id: number
      user_id: number
      player_id: number
      points: number | null
    }, ExtArgs["result"]["choice"]>
    composites: {}
  }

  type choiceGetPayload<S extends boolean | null | undefined | choiceDefaultArgs> = $Result.GetResult<Prisma.$choicePayload, S>

  type choiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<choiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface choiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['choice'], meta: { name: 'choice' } }
    /**
     * Find zero or one Choice that matches the filter.
     * @param {choiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends choiceFindUniqueArgs>(args: SelectSubset<T, choiceFindUniqueArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {choiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends choiceFindUniqueOrThrowArgs>(args: SelectSubset<T, choiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends choiceFindFirstArgs>(args?: SelectSubset<T, choiceFindFirstArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends choiceFindFirstOrThrowArgs>(args?: SelectSubset<T, choiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choiceWithIdOnly = await prisma.choice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends choiceFindManyArgs>(args?: SelectSubset<T, choiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choice.
     * @param {choiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
     */
    create<T extends choiceCreateArgs>(args: SelectSubset<T, choiceCreateArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choices.
     * @param {choiceCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends choiceCreateManyArgs>(args?: SelectSubset<T, choiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Choice.
     * @param {choiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
     */
    delete<T extends choiceDeleteArgs>(args: SelectSubset<T, choiceDeleteArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choice.
     * @param {choiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends choiceUpdateArgs>(args: SelectSubset<T, choiceUpdateArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choices.
     * @param {choiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends choiceDeleteManyArgs>(args?: SelectSubset<T, choiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends choiceUpdateManyArgs>(args: SelectSubset<T, choiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choice.
     * @param {choiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
     */
    upsert<T extends choiceUpsertArgs>(args: SelectSubset<T, choiceUpsertArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends choiceCountArgs>(
      args?: Subset<T, choiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceGroupByArgs} args - Group by arguments.
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
      T extends choiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: choiceGroupByArgs['orderBy'] }
        : { orderBy?: choiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, choiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the choice model
   */
  readonly fields: choiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__choiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends playerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playerDefaultArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    week<T extends weekDefaultArgs<ExtArgs> = {}>(args?: Subset<T, weekDefaultArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player_choice<T extends choice$player_choiceArgs<ExtArgs> = {}>(args?: Subset<T, choice$player_choiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the choice model
   */
  interface choiceFieldRefs {
    readonly id: FieldRef<"choice", 'Int'>
    readonly week_id: FieldRef<"choice", 'Int'>
    readonly user_id: FieldRef<"choice", 'Int'>
    readonly player_id: FieldRef<"choice", 'Int'>
    readonly points: FieldRef<"choice", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * choice findUnique
   */
  export type choiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice findUniqueOrThrow
   */
  export type choiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice findFirst
   */
  export type choiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for choices.
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * choice findFirstOrThrow
   */
  export type choiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for choices.
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * choice findMany
   */
  export type choiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * Filter, which choices to fetch.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing choices.
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * choice create
   */
  export type choiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * The data needed to create a choice.
     */
    data: XOR<choiceCreateInput, choiceUncheckedCreateInput>
  }

  /**
   * choice createMany
   */
  export type choiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many choices.
     */
    data: choiceCreateManyInput | choiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * choice update
   */
  export type choiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * The data needed to update a choice.
     */
    data: XOR<choiceUpdateInput, choiceUncheckedUpdateInput>
    /**
     * Choose, which choice to update.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice updateMany
   */
  export type choiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update choices.
     */
    data: XOR<choiceUpdateManyMutationInput, choiceUncheckedUpdateManyInput>
    /**
     * Filter which choices to update
     */
    where?: choiceWhereInput
    /**
     * Limit how many choices to update.
     */
    limit?: number
  }

  /**
   * choice upsert
   */
  export type choiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * The filter to search for the choice to update in case it exists.
     */
    where: choiceWhereUniqueInput
    /**
     * In case the choice found by the `where` argument doesn't exist, create a new choice with this data.
     */
    create: XOR<choiceCreateInput, choiceUncheckedCreateInput>
    /**
     * In case the choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<choiceUpdateInput, choiceUncheckedUpdateInput>
  }

  /**
   * choice delete
   */
  export type choiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    /**
     * Filter which choice to delete.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice deleteMany
   */
  export type choiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which choices to delete
     */
    where?: choiceWhereInput
    /**
     * Limit how many choices to delete.
     */
    limit?: number
  }

  /**
   * choice.player_choice
   */
  export type choice$player_choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    where?: player_choiceWhereInput
    orderBy?: player_choiceOrderByWithRelationInput | player_choiceOrderByWithRelationInput[]
    cursor?: player_choiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_choiceScalarFieldEnum | Player_choiceScalarFieldEnum[]
  }

  /**
   * choice without action
   */
  export type choiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
  }


  /**
   * Model doctrine_migration_versions
   */

  export type AggregateDoctrine_migration_versions = {
    _count: Doctrine_migration_versionsCountAggregateOutputType | null
    _avg: Doctrine_migration_versionsAvgAggregateOutputType | null
    _sum: Doctrine_migration_versionsSumAggregateOutputType | null
    _min: Doctrine_migration_versionsMinAggregateOutputType | null
    _max: Doctrine_migration_versionsMaxAggregateOutputType | null
  }

  export type Doctrine_migration_versionsAvgAggregateOutputType = {
    execution_time: number | null
  }

  export type Doctrine_migration_versionsSumAggregateOutputType = {
    execution_time: number | null
  }

  export type Doctrine_migration_versionsMinAggregateOutputType = {
    version: string | null
    executed_at: Date | null
    execution_time: number | null
  }

  export type Doctrine_migration_versionsMaxAggregateOutputType = {
    version: string | null
    executed_at: Date | null
    execution_time: number | null
  }

  export type Doctrine_migration_versionsCountAggregateOutputType = {
    version: number
    executed_at: number
    execution_time: number
    _all: number
  }


  export type Doctrine_migration_versionsAvgAggregateInputType = {
    execution_time?: true
  }

  export type Doctrine_migration_versionsSumAggregateInputType = {
    execution_time?: true
  }

  export type Doctrine_migration_versionsMinAggregateInputType = {
    version?: true
    executed_at?: true
    execution_time?: true
  }

  export type Doctrine_migration_versionsMaxAggregateInputType = {
    version?: true
    executed_at?: true
    execution_time?: true
  }

  export type Doctrine_migration_versionsCountAggregateInputType = {
    version?: true
    executed_at?: true
    execution_time?: true
    _all?: true
  }

  export type Doctrine_migration_versionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctrine_migration_versions to aggregate.
     */
    where?: doctrine_migration_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctrine_migration_versions to fetch.
     */
    orderBy?: doctrine_migration_versionsOrderByWithRelationInput | doctrine_migration_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctrine_migration_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctrine_migration_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctrine_migration_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctrine_migration_versions
    **/
    _count?: true | Doctrine_migration_versionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Doctrine_migration_versionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Doctrine_migration_versionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Doctrine_migration_versionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Doctrine_migration_versionsMaxAggregateInputType
  }

  export type GetDoctrine_migration_versionsAggregateType<T extends Doctrine_migration_versionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctrine_migration_versions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctrine_migration_versions[P]>
      : GetScalarType<T[P], AggregateDoctrine_migration_versions[P]>
  }




  export type doctrine_migration_versionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctrine_migration_versionsWhereInput
    orderBy?: doctrine_migration_versionsOrderByWithAggregationInput | doctrine_migration_versionsOrderByWithAggregationInput[]
    by: Doctrine_migration_versionsScalarFieldEnum[] | Doctrine_migration_versionsScalarFieldEnum
    having?: doctrine_migration_versionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Doctrine_migration_versionsCountAggregateInputType | true
    _avg?: Doctrine_migration_versionsAvgAggregateInputType
    _sum?: Doctrine_migration_versionsSumAggregateInputType
    _min?: Doctrine_migration_versionsMinAggregateInputType
    _max?: Doctrine_migration_versionsMaxAggregateInputType
  }

  export type Doctrine_migration_versionsGroupByOutputType = {
    version: string
    executed_at: Date | null
    execution_time: number | null
    _count: Doctrine_migration_versionsCountAggregateOutputType | null
    _avg: Doctrine_migration_versionsAvgAggregateOutputType | null
    _sum: Doctrine_migration_versionsSumAggregateOutputType | null
    _min: Doctrine_migration_versionsMinAggregateOutputType | null
    _max: Doctrine_migration_versionsMaxAggregateOutputType | null
  }

  type GetDoctrine_migration_versionsGroupByPayload<T extends doctrine_migration_versionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Doctrine_migration_versionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Doctrine_migration_versionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Doctrine_migration_versionsGroupByOutputType[P]>
            : GetScalarType<T[P], Doctrine_migration_versionsGroupByOutputType[P]>
        }
      >
    >


  export type doctrine_migration_versionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    executed_at?: boolean
    execution_time?: boolean
  }, ExtArgs["result"]["doctrine_migration_versions"]>



  export type doctrine_migration_versionsSelectScalar = {
    version?: boolean
    executed_at?: boolean
    execution_time?: boolean
  }

  export type doctrine_migration_versionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"version" | "executed_at" | "execution_time", ExtArgs["result"]["doctrine_migration_versions"]>

  export type $doctrine_migration_versionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctrine_migration_versions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      version: string
      executed_at: Date | null
      execution_time: number | null
    }, ExtArgs["result"]["doctrine_migration_versions"]>
    composites: {}
  }

  type doctrine_migration_versionsGetPayload<S extends boolean | null | undefined | doctrine_migration_versionsDefaultArgs> = $Result.GetResult<Prisma.$doctrine_migration_versionsPayload, S>

  type doctrine_migration_versionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctrine_migration_versionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Doctrine_migration_versionsCountAggregateInputType | true
    }

  export interface doctrine_migration_versionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctrine_migration_versions'], meta: { name: 'doctrine_migration_versions' } }
    /**
     * Find zero or one Doctrine_migration_versions that matches the filter.
     * @param {doctrine_migration_versionsFindUniqueArgs} args - Arguments to find a Doctrine_migration_versions
     * @example
     * // Get one Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctrine_migration_versionsFindUniqueArgs>(args: SelectSubset<T, doctrine_migration_versionsFindUniqueArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctrine_migration_versions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctrine_migration_versionsFindUniqueOrThrowArgs} args - Arguments to find a Doctrine_migration_versions
     * @example
     * // Get one Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctrine_migration_versionsFindUniqueOrThrowArgs>(args: SelectSubset<T, doctrine_migration_versionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctrine_migration_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctrine_migration_versionsFindFirstArgs} args - Arguments to find a Doctrine_migration_versions
     * @example
     * // Get one Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctrine_migration_versionsFindFirstArgs>(args?: SelectSubset<T, doctrine_migration_versionsFindFirstArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctrine_migration_versions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctrine_migration_versionsFindFirstOrThrowArgs} args - Arguments to find a Doctrine_migration_versions
     * @example
     * // Get one Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctrine_migration_versionsFindFirstOrThrowArgs>(args?: SelectSubset<T, doctrine_migration_versionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctrine_migration_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctrine_migration_versionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.findMany()
     * 
     * // Get first 10 Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.findMany({ take: 10 })
     * 
     * // Only select the `version`
     * const doctrine_migration_versionsWithVersionOnly = await prisma.doctrine_migration_versions.findMany({ select: { version: true } })
     * 
     */
    findMany<T extends doctrine_migration_versionsFindManyArgs>(args?: SelectSubset<T, doctrine_migration_versionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctrine_migration_versions.
     * @param {doctrine_migration_versionsCreateArgs} args - Arguments to create a Doctrine_migration_versions.
     * @example
     * // Create one Doctrine_migration_versions
     * const Doctrine_migration_versions = await prisma.doctrine_migration_versions.create({
     *   data: {
     *     // ... data to create a Doctrine_migration_versions
     *   }
     * })
     * 
     */
    create<T extends doctrine_migration_versionsCreateArgs>(args: SelectSubset<T, doctrine_migration_versionsCreateArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctrine_migration_versions.
     * @param {doctrine_migration_versionsCreateManyArgs} args - Arguments to create many Doctrine_migration_versions.
     * @example
     * // Create many Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctrine_migration_versionsCreateManyArgs>(args?: SelectSubset<T, doctrine_migration_versionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctrine_migration_versions.
     * @param {doctrine_migration_versionsDeleteArgs} args - Arguments to delete one Doctrine_migration_versions.
     * @example
     * // Delete one Doctrine_migration_versions
     * const Doctrine_migration_versions = await prisma.doctrine_migration_versions.delete({
     *   where: {
     *     // ... filter to delete one Doctrine_migration_versions
     *   }
     * })
     * 
     */
    delete<T extends doctrine_migration_versionsDeleteArgs>(args: SelectSubset<T, doctrine_migration_versionsDeleteArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctrine_migration_versions.
     * @param {doctrine_migration_versionsUpdateArgs} args - Arguments to update one Doctrine_migration_versions.
     * @example
     * // Update one Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctrine_migration_versionsUpdateArgs>(args: SelectSubset<T, doctrine_migration_versionsUpdateArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctrine_migration_versions.
     * @param {doctrine_migration_versionsDeleteManyArgs} args - Arguments to filter Doctrine_migration_versions to delete.
     * @example
     * // Delete a few Doctrine_migration_versions
     * const { count } = await prisma.doctrine_migration_versions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctrine_migration_versionsDeleteManyArgs>(args?: SelectSubset<T, doctrine_migration_versionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctrine_migration_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctrine_migration_versionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctrine_migration_versionsUpdateManyArgs>(args: SelectSubset<T, doctrine_migration_versionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctrine_migration_versions.
     * @param {doctrine_migration_versionsUpsertArgs} args - Arguments to update or create a Doctrine_migration_versions.
     * @example
     * // Update or create a Doctrine_migration_versions
     * const doctrine_migration_versions = await prisma.doctrine_migration_versions.upsert({
     *   create: {
     *     // ... data to create a Doctrine_migration_versions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctrine_migration_versions we want to update
     *   }
     * })
     */
    upsert<T extends doctrine_migration_versionsUpsertArgs>(args: SelectSubset<T, doctrine_migration_versionsUpsertArgs<ExtArgs>>): Prisma__doctrine_migration_versionsClient<$Result.GetResult<Prisma.$doctrine_migration_versionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctrine_migration_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctrine_migration_versionsCountArgs} args - Arguments to filter Doctrine_migration_versions to count.
     * @example
     * // Count the number of Doctrine_migration_versions
     * const count = await prisma.doctrine_migration_versions.count({
     *   where: {
     *     // ... the filter for the Doctrine_migration_versions we want to count
     *   }
     * })
    **/
    count<T extends doctrine_migration_versionsCountArgs>(
      args?: Subset<T, doctrine_migration_versionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Doctrine_migration_versionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctrine_migration_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doctrine_migration_versionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Doctrine_migration_versionsAggregateArgs>(args: Subset<T, Doctrine_migration_versionsAggregateArgs>): Prisma.PrismaPromise<GetDoctrine_migration_versionsAggregateType<T>>

    /**
     * Group by Doctrine_migration_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctrine_migration_versionsGroupByArgs} args - Group by arguments.
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
      T extends doctrine_migration_versionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctrine_migration_versionsGroupByArgs['orderBy'] }
        : { orderBy?: doctrine_migration_versionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, doctrine_migration_versionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctrine_migration_versionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctrine_migration_versions model
   */
  readonly fields: doctrine_migration_versionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctrine_migration_versions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctrine_migration_versionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the doctrine_migration_versions model
   */
  interface doctrine_migration_versionsFieldRefs {
    readonly version: FieldRef<"doctrine_migration_versions", 'String'>
    readonly executed_at: FieldRef<"doctrine_migration_versions", 'DateTime'>
    readonly execution_time: FieldRef<"doctrine_migration_versions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * doctrine_migration_versions findUnique
   */
  export type doctrine_migration_versionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * Filter, which doctrine_migration_versions to fetch.
     */
    where: doctrine_migration_versionsWhereUniqueInput
  }

  /**
   * doctrine_migration_versions findUniqueOrThrow
   */
  export type doctrine_migration_versionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * Filter, which doctrine_migration_versions to fetch.
     */
    where: doctrine_migration_versionsWhereUniqueInput
  }

  /**
   * doctrine_migration_versions findFirst
   */
  export type doctrine_migration_versionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * Filter, which doctrine_migration_versions to fetch.
     */
    where?: doctrine_migration_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctrine_migration_versions to fetch.
     */
    orderBy?: doctrine_migration_versionsOrderByWithRelationInput | doctrine_migration_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctrine_migration_versions.
     */
    cursor?: doctrine_migration_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctrine_migration_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctrine_migration_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctrine_migration_versions.
     */
    distinct?: Doctrine_migration_versionsScalarFieldEnum | Doctrine_migration_versionsScalarFieldEnum[]
  }

  /**
   * doctrine_migration_versions findFirstOrThrow
   */
  export type doctrine_migration_versionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * Filter, which doctrine_migration_versions to fetch.
     */
    where?: doctrine_migration_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctrine_migration_versions to fetch.
     */
    orderBy?: doctrine_migration_versionsOrderByWithRelationInput | doctrine_migration_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctrine_migration_versions.
     */
    cursor?: doctrine_migration_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctrine_migration_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctrine_migration_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctrine_migration_versions.
     */
    distinct?: Doctrine_migration_versionsScalarFieldEnum | Doctrine_migration_versionsScalarFieldEnum[]
  }

  /**
   * doctrine_migration_versions findMany
   */
  export type doctrine_migration_versionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * Filter, which doctrine_migration_versions to fetch.
     */
    where?: doctrine_migration_versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctrine_migration_versions to fetch.
     */
    orderBy?: doctrine_migration_versionsOrderByWithRelationInput | doctrine_migration_versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctrine_migration_versions.
     */
    cursor?: doctrine_migration_versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctrine_migration_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctrine_migration_versions.
     */
    skip?: number
    distinct?: Doctrine_migration_versionsScalarFieldEnum | Doctrine_migration_versionsScalarFieldEnum[]
  }

  /**
   * doctrine_migration_versions create
   */
  export type doctrine_migration_versionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * The data needed to create a doctrine_migration_versions.
     */
    data: XOR<doctrine_migration_versionsCreateInput, doctrine_migration_versionsUncheckedCreateInput>
  }

  /**
   * doctrine_migration_versions createMany
   */
  export type doctrine_migration_versionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctrine_migration_versions.
     */
    data: doctrine_migration_versionsCreateManyInput | doctrine_migration_versionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctrine_migration_versions update
   */
  export type doctrine_migration_versionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * The data needed to update a doctrine_migration_versions.
     */
    data: XOR<doctrine_migration_versionsUpdateInput, doctrine_migration_versionsUncheckedUpdateInput>
    /**
     * Choose, which doctrine_migration_versions to update.
     */
    where: doctrine_migration_versionsWhereUniqueInput
  }

  /**
   * doctrine_migration_versions updateMany
   */
  export type doctrine_migration_versionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctrine_migration_versions.
     */
    data: XOR<doctrine_migration_versionsUpdateManyMutationInput, doctrine_migration_versionsUncheckedUpdateManyInput>
    /**
     * Filter which doctrine_migration_versions to update
     */
    where?: doctrine_migration_versionsWhereInput
    /**
     * Limit how many doctrine_migration_versions to update.
     */
    limit?: number
  }

  /**
   * doctrine_migration_versions upsert
   */
  export type doctrine_migration_versionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * The filter to search for the doctrine_migration_versions to update in case it exists.
     */
    where: doctrine_migration_versionsWhereUniqueInput
    /**
     * In case the doctrine_migration_versions found by the `where` argument doesn't exist, create a new doctrine_migration_versions with this data.
     */
    create: XOR<doctrine_migration_versionsCreateInput, doctrine_migration_versionsUncheckedCreateInput>
    /**
     * In case the doctrine_migration_versions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctrine_migration_versionsUpdateInput, doctrine_migration_versionsUncheckedUpdateInput>
  }

  /**
   * doctrine_migration_versions delete
   */
  export type doctrine_migration_versionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
    /**
     * Filter which doctrine_migration_versions to delete.
     */
    where: doctrine_migration_versionsWhereUniqueInput
  }

  /**
   * doctrine_migration_versions deleteMany
   */
  export type doctrine_migration_versionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctrine_migration_versions to delete
     */
    where?: doctrine_migration_versionsWhereInput
    /**
     * Limit how many doctrine_migration_versions to delete.
     */
    limit?: number
  }

  /**
   * doctrine_migration_versions without action
   */
  export type doctrine_migration_versionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctrine_migration_versions
     */
    select?: doctrine_migration_versionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctrine_migration_versions
     */
    omit?: doctrine_migration_versionsOmit<ExtArgs> | null
  }


  /**
   * Model game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    team_home_id: number | null
    team_away_id: number | null
    week_id: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    team_home_id: number | null
    team_away_id: number | null
    week_id: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    team_home_id: number | null
    team_away_id: number | null
    week_id: number | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    team_home_id: number | null
    team_away_id: number | null
    week_id: number | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    team_home_id: number
    team_away_id: number
    week_id: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    team_home_id?: true
    team_away_id?: true
    week_id?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    team_home_id?: true
    team_away_id?: true
    week_id?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    team_home_id?: true
    team_away_id?: true
    week_id?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    team_home_id?: true
    team_away_id?: true
    week_id?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    team_home_id?: true
    team_away_id?: true
    week_id?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game to aggregate.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type gameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
    orderBy?: gameOrderByWithAggregationInput | gameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: gameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    team_home_id: number | null
    team_away_id: number
    week_id: number
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends gameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type gameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_home_id?: boolean
    team_away_id?: boolean
    week_id?: boolean
    team_home?: boolean | game$team_homeArgs<ExtArgs>
    team_away?: boolean | teamDefaultArgs<ExtArgs>
    week?: boolean | weekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>



  export type gameSelectScalar = {
    id?: boolean
    team_home_id?: boolean
    team_away_id?: boolean
    week_id?: boolean
  }

  export type gameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team_home_id" | "team_away_id" | "week_id", ExtArgs["result"]["game"]>
  export type gameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_home?: boolean | game$team_homeArgs<ExtArgs>
    team_away?: boolean | teamDefaultArgs<ExtArgs>
    week?: boolean | weekDefaultArgs<ExtArgs>
  }

  export type $gamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game"
    objects: {
      team_home: Prisma.$teamPayload<ExtArgs> | null
      team_away: Prisma.$teamPayload<ExtArgs>
      week: Prisma.$weekPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      team_home_id: number | null
      team_away_id: number
      week_id: number
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type gameGetPayload<S extends boolean | null | undefined | gameDefaultArgs> = $Result.GetResult<Prisma.$gamePayload, S>

  type gameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface gameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game'], meta: { name: 'game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {gameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gameFindUniqueArgs>(args: SelectSubset<T, gameFindUniqueArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gameFindUniqueOrThrowArgs>(args: SelectSubset<T, gameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gameFindFirstArgs>(args?: SelectSubset<T, gameFindFirstArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gameFindFirstOrThrowArgs>(args?: SelectSubset<T, gameFindFirstOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gameFindManyArgs>(args?: SelectSubset<T, gameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {gameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends gameCreateArgs>(args: SelectSubset<T, gameCreateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {gameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gameCreateManyArgs>(args?: SelectSubset<T, gameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {gameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends gameDeleteArgs>(args: SelectSubset<T, gameDeleteArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {gameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gameUpdateArgs>(args: SelectSubset<T, gameUpdateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {gameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gameDeleteManyArgs>(args?: SelectSubset<T, gameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gameUpdateManyArgs>(args: SelectSubset<T, gameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {gameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends gameUpsertArgs>(args: SelectSubset<T, gameUpsertArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gameCountArgs>(
      args?: Subset<T, gameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGroupByArgs} args - Group by arguments.
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
      T extends gameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameGroupByArgs['orderBy'] }
        : { orderBy?: gameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game model
   */
  readonly fields: gameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_home<T extends game$team_homeArgs<ExtArgs> = {}>(args?: Subset<T, game$team_homeArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    team_away<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    week<T extends weekDefaultArgs<ExtArgs> = {}>(args?: Subset<T, weekDefaultArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the game model
   */
  interface gameFieldRefs {
    readonly id: FieldRef<"game", 'Int'>
    readonly team_home_id: FieldRef<"game", 'Int'>
    readonly team_away_id: FieldRef<"game", 'Int'>
    readonly week_id: FieldRef<"game", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * game findUnique
   */
  export type gameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findUniqueOrThrow
   */
  export type gameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findFirst
   */
  export type gameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findFirstOrThrow
   */
  export type gameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findMany
   */
  export type gameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game create
   */
  export type gameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to create a game.
     */
    data: XOR<gameCreateInput, gameUncheckedCreateInput>
  }

  /**
   * game createMany
   */
  export type gameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: gameCreateManyInput | gameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game update
   */
  export type gameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to update a game.
     */
    data: XOR<gameUpdateInput, gameUncheckedUpdateInput>
    /**
     * Choose, which game to update.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game updateMany
   */
  export type gameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gameWhereInput
    /**
     * Limit how many games to update.
     */
    limit?: number
  }

  /**
   * game upsert
   */
  export type gameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The filter to search for the game to update in case it exists.
     */
    where: gameWhereUniqueInput
    /**
     * In case the game found by the `where` argument doesn't exist, create a new game with this data.
     */
    create: XOR<gameCreateInput, gameUncheckedCreateInput>
    /**
     * In case the game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameUpdateInput, gameUncheckedUpdateInput>
  }

  /**
   * game delete
   */
  export type gameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter which game to delete.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game deleteMany
   */
  export type gameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: gameWhereInput
    /**
     * Limit how many games to delete.
     */
    limit?: number
  }

  /**
   * game.team_home
   */
  export type game$team_homeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
  }

  /**
   * game without action
   */
  export type gameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
  }


  /**
   * Model league
   */

  export type AggregateLeague = {
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  export type LeagueAvgAggregateOutputType = {
    id: number | null
  }

  export type LeagueSumAggregateOutputType = {
    id: number | null
  }

  export type LeagueMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LeagueMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LeagueCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LeagueAvgAggregateInputType = {
    id?: true
  }

  export type LeagueSumAggregateInputType = {
    id?: true
  }

  export type LeagueMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LeagueMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LeagueCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LeagueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which league to aggregate.
     */
    where?: leagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leagues to fetch.
     */
    orderBy?: leagueOrderByWithRelationInput | leagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leagues
    **/
    _count?: true | LeagueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeagueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeagueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeagueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeagueMaxAggregateInputType
  }

  export type GetLeagueAggregateType<T extends LeagueAggregateArgs> = {
        [P in keyof T & keyof AggregateLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeague[P]>
      : GetScalarType<T[P], AggregateLeague[P]>
  }




  export type leagueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leagueWhereInput
    orderBy?: leagueOrderByWithAggregationInput | leagueOrderByWithAggregationInput[]
    by: LeagueScalarFieldEnum[] | LeagueScalarFieldEnum
    having?: leagueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeagueCountAggregateInputType | true
    _avg?: LeagueAvgAggregateInputType
    _sum?: LeagueSumAggregateInputType
    _min?: LeagueMinAggregateInputType
    _max?: LeagueMaxAggregateInputType
  }

  export type LeagueGroupByOutputType = {
    id: number
    name: string
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  type GetLeagueGroupByPayload<T extends leagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeagueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeagueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeagueGroupByOutputType[P]>
            : GetScalarType<T[P], LeagueGroupByOutputType[P]>
        }
      >
    >


  export type leagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    team?: boolean | league$teamArgs<ExtArgs>
    week?: boolean | league$weekArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["league"]>



  export type leagueSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type leagueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["league"]>
  export type leagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | league$teamArgs<ExtArgs>
    week?: boolean | league$weekArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $leaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "league"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>[]
      week: Prisma.$weekPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["league"]>
    composites: {}
  }

  type leagueGetPayload<S extends boolean | null | undefined | leagueDefaultArgs> = $Result.GetResult<Prisma.$leaguePayload, S>

  type leagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leagueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeagueCountAggregateInputType | true
    }

  export interface leagueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['league'], meta: { name: 'league' } }
    /**
     * Find zero or one League that matches the filter.
     * @param {leagueFindUniqueArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leagueFindUniqueArgs>(args: SelectSubset<T, leagueFindUniqueArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one League that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leagueFindUniqueOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leagueFindUniqueOrThrowArgs>(args: SelectSubset<T, leagueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first League that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leagueFindFirstArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leagueFindFirstArgs>(args?: SelectSubset<T, leagueFindFirstArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first League that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leagueFindFirstOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leagueFindFirstOrThrowArgs>(args?: SelectSubset<T, leagueFindFirstOrThrowArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leagues
     * const leagues = await prisma.league.findMany()
     * 
     * // Get first 10 Leagues
     * const leagues = await prisma.league.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leagueWithIdOnly = await prisma.league.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leagueFindManyArgs>(args?: SelectSubset<T, leagueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a League.
     * @param {leagueCreateArgs} args - Arguments to create a League.
     * @example
     * // Create one League
     * const League = await prisma.league.create({
     *   data: {
     *     // ... data to create a League
     *   }
     * })
     * 
     */
    create<T extends leagueCreateArgs>(args: SelectSubset<T, leagueCreateArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leagues.
     * @param {leagueCreateManyArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leagueCreateManyArgs>(args?: SelectSubset<T, leagueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a League.
     * @param {leagueDeleteArgs} args - Arguments to delete one League.
     * @example
     * // Delete one League
     * const League = await prisma.league.delete({
     *   where: {
     *     // ... filter to delete one League
     *   }
     * })
     * 
     */
    delete<T extends leagueDeleteArgs>(args: SelectSubset<T, leagueDeleteArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one League.
     * @param {leagueUpdateArgs} args - Arguments to update one League.
     * @example
     * // Update one League
     * const league = await prisma.league.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leagueUpdateArgs>(args: SelectSubset<T, leagueUpdateArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leagues.
     * @param {leagueDeleteManyArgs} args - Arguments to filter Leagues to delete.
     * @example
     * // Delete a few Leagues
     * const { count } = await prisma.league.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leagueDeleteManyArgs>(args?: SelectSubset<T, leagueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leagues
     * const league = await prisma.league.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leagueUpdateManyArgs>(args: SelectSubset<T, leagueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one League.
     * @param {leagueUpsertArgs} args - Arguments to update or create a League.
     * @example
     * // Update or create a League
     * const league = await prisma.league.upsert({
     *   create: {
     *     // ... data to create a League
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the League we want to update
     *   }
     * })
     */
    upsert<T extends leagueUpsertArgs>(args: SelectSubset<T, leagueUpsertArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leagueCountArgs} args - Arguments to filter Leagues to count.
     * @example
     * // Count the number of Leagues
     * const count = await prisma.league.count({
     *   where: {
     *     // ... the filter for the Leagues we want to count
     *   }
     * })
    **/
    count<T extends leagueCountArgs>(
      args?: Subset<T, leagueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeagueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeagueAggregateArgs>(args: Subset<T, LeagueAggregateArgs>): Prisma.PrismaPromise<GetLeagueAggregateType<T>>

    /**
     * Group by League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leagueGroupByArgs} args - Group by arguments.
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
      T extends leagueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leagueGroupByArgs['orderBy'] }
        : { orderBy?: leagueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, leagueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the league model
   */
  readonly fields: leagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for league.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leagueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends league$teamArgs<ExtArgs> = {}>(args?: Subset<T, league$teamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    week<T extends league$weekArgs<ExtArgs> = {}>(args?: Subset<T, league$weekArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the league model
   */
  interface leagueFieldRefs {
    readonly id: FieldRef<"league", 'Int'>
    readonly name: FieldRef<"league", 'String'>
  }
    

  // Custom InputTypes
  /**
   * league findUnique
   */
  export type leagueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * Filter, which league to fetch.
     */
    where: leagueWhereUniqueInput
  }

  /**
   * league findUniqueOrThrow
   */
  export type leagueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * Filter, which league to fetch.
     */
    where: leagueWhereUniqueInput
  }

  /**
   * league findFirst
   */
  export type leagueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * Filter, which league to fetch.
     */
    where?: leagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leagues to fetch.
     */
    orderBy?: leagueOrderByWithRelationInput | leagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leagues.
     */
    cursor?: leagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * league findFirstOrThrow
   */
  export type leagueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * Filter, which league to fetch.
     */
    where?: leagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leagues to fetch.
     */
    orderBy?: leagueOrderByWithRelationInput | leagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leagues.
     */
    cursor?: leagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * league findMany
   */
  export type leagueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * Filter, which leagues to fetch.
     */
    where?: leagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leagues to fetch.
     */
    orderBy?: leagueOrderByWithRelationInput | leagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leagues.
     */
    cursor?: leagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leagues.
     */
    skip?: number
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * league create
   */
  export type leagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * The data needed to create a league.
     */
    data: XOR<leagueCreateInput, leagueUncheckedCreateInput>
  }

  /**
   * league createMany
   */
  export type leagueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leagues.
     */
    data: leagueCreateManyInput | leagueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * league update
   */
  export type leagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * The data needed to update a league.
     */
    data: XOR<leagueUpdateInput, leagueUncheckedUpdateInput>
    /**
     * Choose, which league to update.
     */
    where: leagueWhereUniqueInput
  }

  /**
   * league updateMany
   */
  export type leagueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leagues.
     */
    data: XOR<leagueUpdateManyMutationInput, leagueUncheckedUpdateManyInput>
    /**
     * Filter which leagues to update
     */
    where?: leagueWhereInput
    /**
     * Limit how many leagues to update.
     */
    limit?: number
  }

  /**
   * league upsert
   */
  export type leagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * The filter to search for the league to update in case it exists.
     */
    where: leagueWhereUniqueInput
    /**
     * In case the league found by the `where` argument doesn't exist, create a new league with this data.
     */
    create: XOR<leagueCreateInput, leagueUncheckedCreateInput>
    /**
     * In case the league was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leagueUpdateInput, leagueUncheckedUpdateInput>
  }

  /**
   * league delete
   */
  export type leagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
    /**
     * Filter which league to delete.
     */
    where: leagueWhereUniqueInput
  }

  /**
   * league deleteMany
   */
  export type leagueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leagues to delete
     */
    where?: leagueWhereInput
    /**
     * Limit how many leagues to delete.
     */
    limit?: number
  }

  /**
   * league.team
   */
  export type league$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    cursor?: teamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * league.week
   */
  export type league$weekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    where?: weekWhereInput
    orderBy?: weekOrderByWithRelationInput | weekOrderByWithRelationInput[]
    cursor?: weekWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * league without action
   */
  export type leagueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the league
     */
    select?: leagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the league
     */
    omit?: leagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leagueInclude<ExtArgs> | null
  }


  /**
   * Model player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    team_id: number | null
    rating: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    team_id: number | null
    rating: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    team_id: number | null
    forename: string | null
    name: string | null
    rating: number | null
    selected: boolean | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    team_id: number | null
    forename: string | null
    name: string | null
    rating: number | null
    selected: boolean | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    team_id: number
    forename: number
    name: number
    rating: number
    selected: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    team_id?: true
    rating?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    team_id?: true
    rating?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    team_id?: true
    forename?: true
    name?: true
    rating?: true
    selected?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    team_id?: true
    forename?: true
    name?: true
    rating?: true
    selected?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    team_id?: true
    forename?: true
    name?: true
    rating?: true
    selected?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player to aggregate.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type playerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playerWhereInput
    orderBy?: playerOrderByWithAggregationInput | playerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    team_id: number | null
    forename: string | null
    name: string | null
    rating: number | null
    selected: boolean
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends playerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type playerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    forename?: boolean
    name?: boolean
    rating?: boolean
    selected?: boolean
    choice?: boolean | player$choiceArgs<ExtArgs>
    team?: boolean | player$teamArgs<ExtArgs>
    player_choice?: boolean | player$player_choiceArgs<ExtArgs>
    player_rate?: boolean | player$player_rateArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>



  export type playerSelectScalar = {
    id?: boolean
    team_id?: boolean
    forename?: boolean
    name?: boolean
    rating?: boolean
    selected?: boolean
  }

  export type playerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team_id" | "forename" | "name" | "rating" | "selected", ExtArgs["result"]["player"]>
  export type playerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choice?: boolean | player$choiceArgs<ExtArgs>
    team?: boolean | player$teamArgs<ExtArgs>
    player_choice?: boolean | player$player_choiceArgs<ExtArgs>
    player_rate?: boolean | player$player_rateArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $playerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player"
    objects: {
      choice: Prisma.$choicePayload<ExtArgs>[]
      team: Prisma.$teamPayload<ExtArgs> | null
      player_choice: Prisma.$player_choicePayload<ExtArgs>[]
      player_rate: Prisma.$player_ratePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      team_id: number | null
      forename: string | null
      name: string | null
      rating: number | null
      selected: boolean
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type playerGetPayload<S extends boolean | null | undefined | playerDefaultArgs> = $Result.GetResult<Prisma.$playerPayload, S>

  type playerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface playerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player'], meta: { name: 'player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {playerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playerFindUniqueArgs>(args: SelectSubset<T, playerFindUniqueArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playerFindUniqueOrThrowArgs>(args: SelectSubset<T, playerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playerFindFirstArgs>(args?: SelectSubset<T, playerFindFirstArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playerFindFirstOrThrowArgs>(args?: SelectSubset<T, playerFindFirstOrThrowArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playerFindManyArgs>(args?: SelectSubset<T, playerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {playerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends playerCreateArgs>(args: SelectSubset<T, playerCreateArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {playerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playerCreateManyArgs>(args?: SelectSubset<T, playerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {playerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends playerDeleteArgs>(args: SelectSubset<T, playerDeleteArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {playerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playerUpdateArgs>(args: SelectSubset<T, playerUpdateArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {playerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playerDeleteManyArgs>(args?: SelectSubset<T, playerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playerUpdateManyArgs>(args: SelectSubset<T, playerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {playerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends playerUpsertArgs>(args: SelectSubset<T, playerUpsertArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playerCountArgs>(
      args?: Subset<T, playerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerGroupByArgs} args - Group by arguments.
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
      T extends playerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playerGroupByArgs['orderBy'] }
        : { orderBy?: playerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, playerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player model
   */
  readonly fields: playerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    choice<T extends player$choiceArgs<ExtArgs> = {}>(args?: Subset<T, player$choiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team<T extends player$teamArgs<ExtArgs> = {}>(args?: Subset<T, player$teamArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player_choice<T extends player$player_choiceArgs<ExtArgs> = {}>(args?: Subset<T, player$player_choiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    player_rate<T extends player$player_rateArgs<ExtArgs> = {}>(args?: Subset<T, player$player_rateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the player model
   */
  interface playerFieldRefs {
    readonly id: FieldRef<"player", 'Int'>
    readonly team_id: FieldRef<"player", 'Int'>
    readonly forename: FieldRef<"player", 'String'>
    readonly name: FieldRef<"player", 'String'>
    readonly rating: FieldRef<"player", 'Float'>
    readonly selected: FieldRef<"player", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * player findUnique
   */
  export type playerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player findUniqueOrThrow
   */
  export type playerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player findFirst
   */
  export type playerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player findFirstOrThrow
   */
  export type playerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player findMany
   */
  export type playerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player create
   */
  export type playerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * The data needed to create a player.
     */
    data: XOR<playerCreateInput, playerUncheckedCreateInput>
  }

  /**
   * player createMany
   */
  export type playerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many players.
     */
    data: playerCreateManyInput | playerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player update
   */
  export type playerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * The data needed to update a player.
     */
    data: XOR<playerUpdateInput, playerUncheckedUpdateInput>
    /**
     * Choose, which player to update.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player updateMany
   */
  export type playerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update players.
     */
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playerWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
  }

  /**
   * player upsert
   */
  export type playerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * The filter to search for the player to update in case it exists.
     */
    where: playerWhereUniqueInput
    /**
     * In case the player found by the `where` argument doesn't exist, create a new player with this data.
     */
    create: XOR<playerCreateInput, playerUncheckedCreateInput>
    /**
     * In case the player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playerUpdateInput, playerUncheckedUpdateInput>
  }

  /**
   * player delete
   */
  export type playerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter which player to delete.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player deleteMany
   */
  export type playerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to delete
     */
    where?: playerWhereInput
    /**
     * Limit how many players to delete.
     */
    limit?: number
  }

  /**
   * player.choice
   */
  export type player$choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    where?: choiceWhereInput
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    cursor?: choiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * player.team
   */
  export type player$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
  }

  /**
   * player.player_choice
   */
  export type player$player_choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    where?: player_choiceWhereInput
    orderBy?: player_choiceOrderByWithRelationInput | player_choiceOrderByWithRelationInput[]
    cursor?: player_choiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_choiceScalarFieldEnum | Player_choiceScalarFieldEnum[]
  }

  /**
   * player.player_rate
   */
  export type player$player_rateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    where?: player_rateWhereInput
    orderBy?: player_rateOrderByWithRelationInput | player_rateOrderByWithRelationInput[]
    cursor?: player_rateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_rateScalarFieldEnum | Player_rateScalarFieldEnum[]
  }

  /**
   * player without action
   */
  export type playerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
  }


  /**
   * Model player_choice
   */

  export type AggregatePlayer_choice = {
    _count: Player_choiceCountAggregateOutputType | null
    _avg: Player_choiceAvgAggregateOutputType | null
    _sum: Player_choiceSumAggregateOutputType | null
    _min: Player_choiceMinAggregateOutputType | null
    _max: Player_choiceMaxAggregateOutputType | null
  }

  export type Player_choiceAvgAggregateOutputType = {
    player_id: number | null
    choice_id: number | null
  }

  export type Player_choiceSumAggregateOutputType = {
    player_id: number | null
    choice_id: number | null
  }

  export type Player_choiceMinAggregateOutputType = {
    player_id: number | null
    choice_id: number | null
  }

  export type Player_choiceMaxAggregateOutputType = {
    player_id: number | null
    choice_id: number | null
  }

  export type Player_choiceCountAggregateOutputType = {
    player_id: number
    choice_id: number
    _all: number
  }


  export type Player_choiceAvgAggregateInputType = {
    player_id?: true
    choice_id?: true
  }

  export type Player_choiceSumAggregateInputType = {
    player_id?: true
    choice_id?: true
  }

  export type Player_choiceMinAggregateInputType = {
    player_id?: true
    choice_id?: true
  }

  export type Player_choiceMaxAggregateInputType = {
    player_id?: true
    choice_id?: true
  }

  export type Player_choiceCountAggregateInputType = {
    player_id?: true
    choice_id?: true
    _all?: true
  }

  export type Player_choiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_choice to aggregate.
     */
    where?: player_choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_choices to fetch.
     */
    orderBy?: player_choiceOrderByWithRelationInput | player_choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: player_choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned player_choices
    **/
    _count?: true | Player_choiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Player_choiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Player_choiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Player_choiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Player_choiceMaxAggregateInputType
  }

  export type GetPlayer_choiceAggregateType<T extends Player_choiceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer_choice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer_choice[P]>
      : GetScalarType<T[P], AggregatePlayer_choice[P]>
  }




  export type player_choiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_choiceWhereInput
    orderBy?: player_choiceOrderByWithAggregationInput | player_choiceOrderByWithAggregationInput[]
    by: Player_choiceScalarFieldEnum[] | Player_choiceScalarFieldEnum
    having?: player_choiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Player_choiceCountAggregateInputType | true
    _avg?: Player_choiceAvgAggregateInputType
    _sum?: Player_choiceSumAggregateInputType
    _min?: Player_choiceMinAggregateInputType
    _max?: Player_choiceMaxAggregateInputType
  }

  export type Player_choiceGroupByOutputType = {
    player_id: number
    choice_id: number
    _count: Player_choiceCountAggregateOutputType | null
    _avg: Player_choiceAvgAggregateOutputType | null
    _sum: Player_choiceSumAggregateOutputType | null
    _min: Player_choiceMinAggregateOutputType | null
    _max: Player_choiceMaxAggregateOutputType | null
  }

  type GetPlayer_choiceGroupByPayload<T extends player_choiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Player_choiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Player_choiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Player_choiceGroupByOutputType[P]>
            : GetScalarType<T[P], Player_choiceGroupByOutputType[P]>
        }
      >
    >


  export type player_choiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    choice_id?: boolean
    choice?: boolean | choiceDefaultArgs<ExtArgs>
    player?: boolean | playerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player_choice"]>



  export type player_choiceSelectScalar = {
    player_id?: boolean
    choice_id?: boolean
  }

  export type player_choiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "choice_id", ExtArgs["result"]["player_choice"]>
  export type player_choiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choice?: boolean | choiceDefaultArgs<ExtArgs>
    player?: boolean | playerDefaultArgs<ExtArgs>
  }

  export type $player_choicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player_choice"
    objects: {
      choice: Prisma.$choicePayload<ExtArgs>
      player: Prisma.$playerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      player_id: number
      choice_id: number
    }, ExtArgs["result"]["player_choice"]>
    composites: {}
  }

  type player_choiceGetPayload<S extends boolean | null | undefined | player_choiceDefaultArgs> = $Result.GetResult<Prisma.$player_choicePayload, S>

  type player_choiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<player_choiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Player_choiceCountAggregateInputType | true
    }

  export interface player_choiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player_choice'], meta: { name: 'player_choice' } }
    /**
     * Find zero or one Player_choice that matches the filter.
     * @param {player_choiceFindUniqueArgs} args - Arguments to find a Player_choice
     * @example
     * // Get one Player_choice
     * const player_choice = await prisma.player_choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends player_choiceFindUniqueArgs>(args: SelectSubset<T, player_choiceFindUniqueArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player_choice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {player_choiceFindUniqueOrThrowArgs} args - Arguments to find a Player_choice
     * @example
     * // Get one Player_choice
     * const player_choice = await prisma.player_choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends player_choiceFindUniqueOrThrowArgs>(args: SelectSubset<T, player_choiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_choiceFindFirstArgs} args - Arguments to find a Player_choice
     * @example
     * // Get one Player_choice
     * const player_choice = await prisma.player_choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends player_choiceFindFirstArgs>(args?: SelectSubset<T, player_choiceFindFirstArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_choiceFindFirstOrThrowArgs} args - Arguments to find a Player_choice
     * @example
     * // Get one Player_choice
     * const player_choice = await prisma.player_choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends player_choiceFindFirstOrThrowArgs>(args?: SelectSubset<T, player_choiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Player_choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_choiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Player_choices
     * const player_choices = await prisma.player_choice.findMany()
     * 
     * // Get first 10 Player_choices
     * const player_choices = await prisma.player_choice.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const player_choiceWithPlayer_idOnly = await prisma.player_choice.findMany({ select: { player_id: true } })
     * 
     */
    findMany<T extends player_choiceFindManyArgs>(args?: SelectSubset<T, player_choiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player_choice.
     * @param {player_choiceCreateArgs} args - Arguments to create a Player_choice.
     * @example
     * // Create one Player_choice
     * const Player_choice = await prisma.player_choice.create({
     *   data: {
     *     // ... data to create a Player_choice
     *   }
     * })
     * 
     */
    create<T extends player_choiceCreateArgs>(args: SelectSubset<T, player_choiceCreateArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Player_choices.
     * @param {player_choiceCreateManyArgs} args - Arguments to create many Player_choices.
     * @example
     * // Create many Player_choices
     * const player_choice = await prisma.player_choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends player_choiceCreateManyArgs>(args?: SelectSubset<T, player_choiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player_choice.
     * @param {player_choiceDeleteArgs} args - Arguments to delete one Player_choice.
     * @example
     * // Delete one Player_choice
     * const Player_choice = await prisma.player_choice.delete({
     *   where: {
     *     // ... filter to delete one Player_choice
     *   }
     * })
     * 
     */
    delete<T extends player_choiceDeleteArgs>(args: SelectSubset<T, player_choiceDeleteArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player_choice.
     * @param {player_choiceUpdateArgs} args - Arguments to update one Player_choice.
     * @example
     * // Update one Player_choice
     * const player_choice = await prisma.player_choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends player_choiceUpdateArgs>(args: SelectSubset<T, player_choiceUpdateArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Player_choices.
     * @param {player_choiceDeleteManyArgs} args - Arguments to filter Player_choices to delete.
     * @example
     * // Delete a few Player_choices
     * const { count } = await prisma.player_choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends player_choiceDeleteManyArgs>(args?: SelectSubset<T, player_choiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_choiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Player_choices
     * const player_choice = await prisma.player_choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends player_choiceUpdateManyArgs>(args: SelectSubset<T, player_choiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player_choice.
     * @param {player_choiceUpsertArgs} args - Arguments to update or create a Player_choice.
     * @example
     * // Update or create a Player_choice
     * const player_choice = await prisma.player_choice.upsert({
     *   create: {
     *     // ... data to create a Player_choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player_choice we want to update
     *   }
     * })
     */
    upsert<T extends player_choiceUpsertArgs>(args: SelectSubset<T, player_choiceUpsertArgs<ExtArgs>>): Prisma__player_choiceClient<$Result.GetResult<Prisma.$player_choicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Player_choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_choiceCountArgs} args - Arguments to filter Player_choices to count.
     * @example
     * // Count the number of Player_choices
     * const count = await prisma.player_choice.count({
     *   where: {
     *     // ... the filter for the Player_choices we want to count
     *   }
     * })
    **/
    count<T extends player_choiceCountArgs>(
      args?: Subset<T, player_choiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Player_choiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player_choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_choiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Player_choiceAggregateArgs>(args: Subset<T, Player_choiceAggregateArgs>): Prisma.PrismaPromise<GetPlayer_choiceAggregateType<T>>

    /**
     * Group by Player_choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_choiceGroupByArgs} args - Group by arguments.
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
      T extends player_choiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: player_choiceGroupByArgs['orderBy'] }
        : { orderBy?: player_choiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, player_choiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_choiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player_choice model
   */
  readonly fields: player_choiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player_choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__player_choiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    choice<T extends choiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, choiceDefaultArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends playerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playerDefaultArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the player_choice model
   */
  interface player_choiceFieldRefs {
    readonly player_id: FieldRef<"player_choice", 'Int'>
    readonly choice_id: FieldRef<"player_choice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * player_choice findUnique
   */
  export type player_choiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * Filter, which player_choice to fetch.
     */
    where: player_choiceWhereUniqueInput
  }

  /**
   * player_choice findUniqueOrThrow
   */
  export type player_choiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * Filter, which player_choice to fetch.
     */
    where: player_choiceWhereUniqueInput
  }

  /**
   * player_choice findFirst
   */
  export type player_choiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * Filter, which player_choice to fetch.
     */
    where?: player_choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_choices to fetch.
     */
    orderBy?: player_choiceOrderByWithRelationInput | player_choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_choices.
     */
    cursor?: player_choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_choices.
     */
    distinct?: Player_choiceScalarFieldEnum | Player_choiceScalarFieldEnum[]
  }

  /**
   * player_choice findFirstOrThrow
   */
  export type player_choiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * Filter, which player_choice to fetch.
     */
    where?: player_choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_choices to fetch.
     */
    orderBy?: player_choiceOrderByWithRelationInput | player_choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_choices.
     */
    cursor?: player_choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_choices.
     */
    distinct?: Player_choiceScalarFieldEnum | Player_choiceScalarFieldEnum[]
  }

  /**
   * player_choice findMany
   */
  export type player_choiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * Filter, which player_choices to fetch.
     */
    where?: player_choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_choices to fetch.
     */
    orderBy?: player_choiceOrderByWithRelationInput | player_choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing player_choices.
     */
    cursor?: player_choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_choices.
     */
    skip?: number
    distinct?: Player_choiceScalarFieldEnum | Player_choiceScalarFieldEnum[]
  }

  /**
   * player_choice create
   */
  export type player_choiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * The data needed to create a player_choice.
     */
    data: XOR<player_choiceCreateInput, player_choiceUncheckedCreateInput>
  }

  /**
   * player_choice createMany
   */
  export type player_choiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many player_choices.
     */
    data: player_choiceCreateManyInput | player_choiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player_choice update
   */
  export type player_choiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * The data needed to update a player_choice.
     */
    data: XOR<player_choiceUpdateInput, player_choiceUncheckedUpdateInput>
    /**
     * Choose, which player_choice to update.
     */
    where: player_choiceWhereUniqueInput
  }

  /**
   * player_choice updateMany
   */
  export type player_choiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update player_choices.
     */
    data: XOR<player_choiceUpdateManyMutationInput, player_choiceUncheckedUpdateManyInput>
    /**
     * Filter which player_choices to update
     */
    where?: player_choiceWhereInput
    /**
     * Limit how many player_choices to update.
     */
    limit?: number
  }

  /**
   * player_choice upsert
   */
  export type player_choiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * The filter to search for the player_choice to update in case it exists.
     */
    where: player_choiceWhereUniqueInput
    /**
     * In case the player_choice found by the `where` argument doesn't exist, create a new player_choice with this data.
     */
    create: XOR<player_choiceCreateInput, player_choiceUncheckedCreateInput>
    /**
     * In case the player_choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<player_choiceUpdateInput, player_choiceUncheckedUpdateInput>
  }

  /**
   * player_choice delete
   */
  export type player_choiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
    /**
     * Filter which player_choice to delete.
     */
    where: player_choiceWhereUniqueInput
  }

  /**
   * player_choice deleteMany
   */
  export type player_choiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_choices to delete
     */
    where?: player_choiceWhereInput
    /**
     * Limit how many player_choices to delete.
     */
    limit?: number
  }

  /**
   * player_choice without action
   */
  export type player_choiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_choice
     */
    select?: player_choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_choice
     */
    omit?: player_choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_choiceInclude<ExtArgs> | null
  }


  /**
   * Model player_rate
   */

  export type AggregatePlayer_rate = {
    _count: Player_rateCountAggregateOutputType | null
    _avg: Player_rateAvgAggregateOutputType | null
    _sum: Player_rateSumAggregateOutputType | null
    _min: Player_rateMinAggregateOutputType | null
    _max: Player_rateMaxAggregateOutputType | null
  }

  export type Player_rateAvgAggregateOutputType = {
    id: number | null
    player_id: number | null
    week_id: number | null
    rate: number | null
  }

  export type Player_rateSumAggregateOutputType = {
    id: number | null
    player_id: number | null
    week_id: number | null
    rate: number | null
  }

  export type Player_rateMinAggregateOutputType = {
    id: number | null
    player_id: number | null
    week_id: number | null
    rate: number | null
  }

  export type Player_rateMaxAggregateOutputType = {
    id: number | null
    player_id: number | null
    week_id: number | null
    rate: number | null
  }

  export type Player_rateCountAggregateOutputType = {
    id: number
    player_id: number
    week_id: number
    rate: number
    _all: number
  }


  export type Player_rateAvgAggregateInputType = {
    id?: true
    player_id?: true
    week_id?: true
    rate?: true
  }

  export type Player_rateSumAggregateInputType = {
    id?: true
    player_id?: true
    week_id?: true
    rate?: true
  }

  export type Player_rateMinAggregateInputType = {
    id?: true
    player_id?: true
    week_id?: true
    rate?: true
  }

  export type Player_rateMaxAggregateInputType = {
    id?: true
    player_id?: true
    week_id?: true
    rate?: true
  }

  export type Player_rateCountAggregateInputType = {
    id?: true
    player_id?: true
    week_id?: true
    rate?: true
    _all?: true
  }

  export type Player_rateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_rate to aggregate.
     */
    where?: player_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_rates to fetch.
     */
    orderBy?: player_rateOrderByWithRelationInput | player_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: player_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned player_rates
    **/
    _count?: true | Player_rateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Player_rateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Player_rateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Player_rateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Player_rateMaxAggregateInputType
  }

  export type GetPlayer_rateAggregateType<T extends Player_rateAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer_rate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer_rate[P]>
      : GetScalarType<T[P], AggregatePlayer_rate[P]>
  }




  export type player_rateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_rateWhereInput
    orderBy?: player_rateOrderByWithAggregationInput | player_rateOrderByWithAggregationInput[]
    by: Player_rateScalarFieldEnum[] | Player_rateScalarFieldEnum
    having?: player_rateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Player_rateCountAggregateInputType | true
    _avg?: Player_rateAvgAggregateInputType
    _sum?: Player_rateSumAggregateInputType
    _min?: Player_rateMinAggregateInputType
    _max?: Player_rateMaxAggregateInputType
  }

  export type Player_rateGroupByOutputType = {
    id: number
    player_id: number
    week_id: number
    rate: number
    _count: Player_rateCountAggregateOutputType | null
    _avg: Player_rateAvgAggregateOutputType | null
    _sum: Player_rateSumAggregateOutputType | null
    _min: Player_rateMinAggregateOutputType | null
    _max: Player_rateMaxAggregateOutputType | null
  }

  type GetPlayer_rateGroupByPayload<T extends player_rateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Player_rateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Player_rateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Player_rateGroupByOutputType[P]>
            : GetScalarType<T[P], Player_rateGroupByOutputType[P]>
        }
      >
    >


  export type player_rateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_id?: boolean
    week_id?: boolean
    rate?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    week?: boolean | weekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player_rate"]>



  export type player_rateSelectScalar = {
    id?: boolean
    player_id?: boolean
    week_id?: boolean
    rate?: boolean
  }

  export type player_rateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player_id" | "week_id" | "rate", ExtArgs["result"]["player_rate"]>
  export type player_rateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    week?: boolean | weekDefaultArgs<ExtArgs>
  }

  export type $player_ratePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player_rate"
    objects: {
      player: Prisma.$playerPayload<ExtArgs>
      week: Prisma.$weekPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      player_id: number
      week_id: number
      rate: number
    }, ExtArgs["result"]["player_rate"]>
    composites: {}
  }

  type player_rateGetPayload<S extends boolean | null | undefined | player_rateDefaultArgs> = $Result.GetResult<Prisma.$player_ratePayload, S>

  type player_rateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<player_rateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Player_rateCountAggregateInputType | true
    }

  export interface player_rateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player_rate'], meta: { name: 'player_rate' } }
    /**
     * Find zero or one Player_rate that matches the filter.
     * @param {player_rateFindUniqueArgs} args - Arguments to find a Player_rate
     * @example
     * // Get one Player_rate
     * const player_rate = await prisma.player_rate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends player_rateFindUniqueArgs>(args: SelectSubset<T, player_rateFindUniqueArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player_rate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {player_rateFindUniqueOrThrowArgs} args - Arguments to find a Player_rate
     * @example
     * // Get one Player_rate
     * const player_rate = await prisma.player_rate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends player_rateFindUniqueOrThrowArgs>(args: SelectSubset<T, player_rateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_rate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_rateFindFirstArgs} args - Arguments to find a Player_rate
     * @example
     * // Get one Player_rate
     * const player_rate = await prisma.player_rate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends player_rateFindFirstArgs>(args?: SelectSubset<T, player_rateFindFirstArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_rate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_rateFindFirstOrThrowArgs} args - Arguments to find a Player_rate
     * @example
     * // Get one Player_rate
     * const player_rate = await prisma.player_rate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends player_rateFindFirstOrThrowArgs>(args?: SelectSubset<T, player_rateFindFirstOrThrowArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Player_rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_rateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Player_rates
     * const player_rates = await prisma.player_rate.findMany()
     * 
     * // Get first 10 Player_rates
     * const player_rates = await prisma.player_rate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const player_rateWithIdOnly = await prisma.player_rate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends player_rateFindManyArgs>(args?: SelectSubset<T, player_rateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player_rate.
     * @param {player_rateCreateArgs} args - Arguments to create a Player_rate.
     * @example
     * // Create one Player_rate
     * const Player_rate = await prisma.player_rate.create({
     *   data: {
     *     // ... data to create a Player_rate
     *   }
     * })
     * 
     */
    create<T extends player_rateCreateArgs>(args: SelectSubset<T, player_rateCreateArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Player_rates.
     * @param {player_rateCreateManyArgs} args - Arguments to create many Player_rates.
     * @example
     * // Create many Player_rates
     * const player_rate = await prisma.player_rate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends player_rateCreateManyArgs>(args?: SelectSubset<T, player_rateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player_rate.
     * @param {player_rateDeleteArgs} args - Arguments to delete one Player_rate.
     * @example
     * // Delete one Player_rate
     * const Player_rate = await prisma.player_rate.delete({
     *   where: {
     *     // ... filter to delete one Player_rate
     *   }
     * })
     * 
     */
    delete<T extends player_rateDeleteArgs>(args: SelectSubset<T, player_rateDeleteArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player_rate.
     * @param {player_rateUpdateArgs} args - Arguments to update one Player_rate.
     * @example
     * // Update one Player_rate
     * const player_rate = await prisma.player_rate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends player_rateUpdateArgs>(args: SelectSubset<T, player_rateUpdateArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Player_rates.
     * @param {player_rateDeleteManyArgs} args - Arguments to filter Player_rates to delete.
     * @example
     * // Delete a few Player_rates
     * const { count } = await prisma.player_rate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends player_rateDeleteManyArgs>(args?: SelectSubset<T, player_rateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_rateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Player_rates
     * const player_rate = await prisma.player_rate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends player_rateUpdateManyArgs>(args: SelectSubset<T, player_rateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player_rate.
     * @param {player_rateUpsertArgs} args - Arguments to update or create a Player_rate.
     * @example
     * // Update or create a Player_rate
     * const player_rate = await prisma.player_rate.upsert({
     *   create: {
     *     // ... data to create a Player_rate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player_rate we want to update
     *   }
     * })
     */
    upsert<T extends player_rateUpsertArgs>(args: SelectSubset<T, player_rateUpsertArgs<ExtArgs>>): Prisma__player_rateClient<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Player_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_rateCountArgs} args - Arguments to filter Player_rates to count.
     * @example
     * // Count the number of Player_rates
     * const count = await prisma.player_rate.count({
     *   where: {
     *     // ... the filter for the Player_rates we want to count
     *   }
     * })
    **/
    count<T extends player_rateCountArgs>(
      args?: Subset<T, player_rateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Player_rateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player_rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_rateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Player_rateAggregateArgs>(args: Subset<T, Player_rateAggregateArgs>): Prisma.PrismaPromise<GetPlayer_rateAggregateType<T>>

    /**
     * Group by Player_rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_rateGroupByArgs} args - Group by arguments.
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
      T extends player_rateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: player_rateGroupByArgs['orderBy'] }
        : { orderBy?: player_rateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, player_rateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_rateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player_rate model
   */
  readonly fields: player_rateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player_rate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__player_rateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends playerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playerDefaultArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    week<T extends weekDefaultArgs<ExtArgs> = {}>(args?: Subset<T, weekDefaultArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the player_rate model
   */
  interface player_rateFieldRefs {
    readonly id: FieldRef<"player_rate", 'Int'>
    readonly player_id: FieldRef<"player_rate", 'Int'>
    readonly week_id: FieldRef<"player_rate", 'Int'>
    readonly rate: FieldRef<"player_rate", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * player_rate findUnique
   */
  export type player_rateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * Filter, which player_rate to fetch.
     */
    where: player_rateWhereUniqueInput
  }

  /**
   * player_rate findUniqueOrThrow
   */
  export type player_rateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * Filter, which player_rate to fetch.
     */
    where: player_rateWhereUniqueInput
  }

  /**
   * player_rate findFirst
   */
  export type player_rateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * Filter, which player_rate to fetch.
     */
    where?: player_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_rates to fetch.
     */
    orderBy?: player_rateOrderByWithRelationInput | player_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_rates.
     */
    cursor?: player_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_rates.
     */
    distinct?: Player_rateScalarFieldEnum | Player_rateScalarFieldEnum[]
  }

  /**
   * player_rate findFirstOrThrow
   */
  export type player_rateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * Filter, which player_rate to fetch.
     */
    where?: player_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_rates to fetch.
     */
    orderBy?: player_rateOrderByWithRelationInput | player_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_rates.
     */
    cursor?: player_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_rates.
     */
    distinct?: Player_rateScalarFieldEnum | Player_rateScalarFieldEnum[]
  }

  /**
   * player_rate findMany
   */
  export type player_rateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * Filter, which player_rates to fetch.
     */
    where?: player_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_rates to fetch.
     */
    orderBy?: player_rateOrderByWithRelationInput | player_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing player_rates.
     */
    cursor?: player_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_rates.
     */
    skip?: number
    distinct?: Player_rateScalarFieldEnum | Player_rateScalarFieldEnum[]
  }

  /**
   * player_rate create
   */
  export type player_rateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * The data needed to create a player_rate.
     */
    data: XOR<player_rateCreateInput, player_rateUncheckedCreateInput>
  }

  /**
   * player_rate createMany
   */
  export type player_rateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many player_rates.
     */
    data: player_rateCreateManyInput | player_rateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player_rate update
   */
  export type player_rateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * The data needed to update a player_rate.
     */
    data: XOR<player_rateUpdateInput, player_rateUncheckedUpdateInput>
    /**
     * Choose, which player_rate to update.
     */
    where: player_rateWhereUniqueInput
  }

  /**
   * player_rate updateMany
   */
  export type player_rateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update player_rates.
     */
    data: XOR<player_rateUpdateManyMutationInput, player_rateUncheckedUpdateManyInput>
    /**
     * Filter which player_rates to update
     */
    where?: player_rateWhereInput
    /**
     * Limit how many player_rates to update.
     */
    limit?: number
  }

  /**
   * player_rate upsert
   */
  export type player_rateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * The filter to search for the player_rate to update in case it exists.
     */
    where: player_rateWhereUniqueInput
    /**
     * In case the player_rate found by the `where` argument doesn't exist, create a new player_rate with this data.
     */
    create: XOR<player_rateCreateInput, player_rateUncheckedCreateInput>
    /**
     * In case the player_rate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<player_rateUpdateInput, player_rateUncheckedUpdateInput>
  }

  /**
   * player_rate delete
   */
  export type player_rateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    /**
     * Filter which player_rate to delete.
     */
    where: player_rateWhereUniqueInput
  }

  /**
   * player_rate deleteMany
   */
  export type player_rateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_rates to delete
     */
    where?: player_rateWhereInput
    /**
     * Limit how many player_rates to delete.
     */
    limit?: number
  }

  /**
   * player_rate without action
   */
  export type player_rateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
  }


  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    league_id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    league_id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    league_id: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    league_id: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    league_id: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    league_id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    league_id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    league_id?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    league_id?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    league_id?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    league_id: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    league_id?: boolean
    home_games?: boolean | team$home_gamesArgs<ExtArgs>
    away_games?: boolean | team$away_gamesArgs<ExtArgs>
    players?: boolean | team$playersArgs<ExtArgs>
    league?: boolean | leagueDefaultArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type teamSelectScalar = {
    id?: boolean
    name?: boolean
    league_id?: boolean
  }

  export type teamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "league_id", ExtArgs["result"]["team"]>
  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_games?: boolean | team$home_gamesArgs<ExtArgs>
    away_games?: boolean | team$away_gamesArgs<ExtArgs>
    players?: boolean | team$playersArgs<ExtArgs>
    league?: boolean | leagueDefaultArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team"
    objects: {
      home_games: Prisma.$gamePayload<ExtArgs>[]
      away_games: Prisma.$gamePayload<ExtArgs>[]
      players: Prisma.$playerPayload<ExtArgs>[]
      league: Prisma.$leaguePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      league_id: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<Prisma.$teamPayload, S>

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team'], meta: { name: 'team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamFindUniqueArgs>(args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs>(args: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamFindFirstArgs>(args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs>(args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamFindManyArgs>(args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends teamCreateArgs>(args: SelectSubset<T, teamCreateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamCreateManyArgs>(args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends teamDeleteArgs>(args: SelectSubset<T, teamDeleteArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamUpdateArgs>(args: SelectSubset<T, teamUpdateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamDeleteManyArgs>(args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamUpdateManyArgs>(args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends teamUpsertArgs>(args: SelectSubset<T, teamUpsertArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
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
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team model
   */
  readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    home_games<T extends team$home_gamesArgs<ExtArgs> = {}>(args?: Subset<T, team$home_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    away_games<T extends team$away_gamesArgs<ExtArgs> = {}>(args?: Subset<T, team$away_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    players<T extends team$playersArgs<ExtArgs> = {}>(args?: Subset<T, team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    league<T extends leagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leagueDefaultArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<"team", 'Int'>
    readonly name: FieldRef<"team", 'String'>
    readonly league_id: FieldRef<"team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>
  }

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>
  }

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * team.home_games
   */
  export type team$home_gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    cursor?: gameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * team.away_games
   */
  export type team$away_gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    cursor?: gameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * team.players
   */
  export type team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    where?: playerWhereInput
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    cursor?: playerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    ptl_lfb: number | null
    pt_lf2: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    ptl_lfb: number | null
    pt_lf2: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    roles: string | null
    password: string | null
    pseudo: string | null
    ptl_lfb: number | null
    pt_lf2: number | null
    reset_token: string | null
    clerk_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    roles: string | null
    password: string | null
    pseudo: string | null
    ptl_lfb: number | null
    pt_lf2: number | null
    reset_token: string | null
    clerk_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    roles: number
    password: number
    pseudo: number
    ptl_lfb: number
    pt_lf2: number
    reset_token: number
    clerk_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    ptl_lfb?: true
    pt_lf2?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    ptl_lfb?: true
    pt_lf2?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    roles?: true
    password?: true
    pseudo?: true
    ptl_lfb?: true
    pt_lf2?: true
    reset_token?: true
    clerk_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    roles?: true
    password?: true
    pseudo?: true
    ptl_lfb?: true
    pt_lf2?: true
    reset_token?: true
    clerk_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    roles?: true
    password?: true
    pseudo?: true
    ptl_lfb?: true
    pt_lf2?: true
    reset_token?: true
    clerk_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    roles: string
    password: string
    pseudo: string | null
    ptl_lfb: number
    pt_lf2: number
    reset_token: string | null
    clerk_id: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    roles?: boolean
    password?: boolean
    pseudo?: boolean
    ptl_lfb?: boolean
    pt_lf2?: boolean
    reset_token?: boolean
    clerk_id?: boolean
    badge?: boolean | user$badgeArgs<ExtArgs>
    choice?: boolean | user$choiceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    roles?: boolean
    password?: boolean
    pseudo?: boolean
    ptl_lfb?: boolean
    pt_lf2?: boolean
    reset_token?: boolean
    clerk_id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "roles" | "password" | "pseudo" | "ptl_lfb" | "pt_lf2" | "reset_token" | "clerk_id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | user$badgeArgs<ExtArgs>
    choice?: boolean | user$choiceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      badge: Prisma.$badgePayload<ExtArgs> | null
      choice: Prisma.$choicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      roles: string
      password: string
      pseudo: string | null
      ptl_lfb: number
      pt_lf2: number
      reset_token: string | null
      clerk_id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badge<T extends user$badgeArgs<ExtArgs> = {}>(args?: Subset<T, user$badgeArgs<ExtArgs>>): Prisma__badgeClient<$Result.GetResult<Prisma.$badgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    choice<T extends user$choiceArgs<ExtArgs> = {}>(args?: Subset<T, user$choiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly roles: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly pseudo: FieldRef<"user", 'String'>
    readonly ptl_lfb: FieldRef<"user", 'Float'>
    readonly pt_lf2: FieldRef<"user", 'Float'>
    readonly reset_token: FieldRef<"user", 'String'>
    readonly clerk_id: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.badge
   */
  export type user$badgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badge
     */
    select?: badgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badge
     */
    omit?: badgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeInclude<ExtArgs> | null
    where?: badgeWhereInput
  }

  /**
   * user.choice
   */
  export type user$choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    where?: choiceWhereInput
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    cursor?: choiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model week
   */

  export type AggregateWeek = {
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  export type WeekAvgAggregateOutputType = {
    id: number | null
    league_id: number | null
  }

  export type WeekSumAggregateOutputType = {
    id: number | null
    league_id: number | null
  }

  export type WeekMinAggregateOutputType = {
    id: number | null
    name: string | null
    league_id: number | null
  }

  export type WeekMaxAggregateOutputType = {
    id: number | null
    name: string | null
    league_id: number | null
  }

  export type WeekCountAggregateOutputType = {
    id: number
    name: number
    league_id: number
    _all: number
  }


  export type WeekAvgAggregateInputType = {
    id?: true
    league_id?: true
  }

  export type WeekSumAggregateInputType = {
    id?: true
    league_id?: true
  }

  export type WeekMinAggregateInputType = {
    id?: true
    name?: true
    league_id?: true
  }

  export type WeekMaxAggregateInputType = {
    id?: true
    name?: true
    league_id?: true
  }

  export type WeekCountAggregateInputType = {
    id?: true
    name?: true
    league_id?: true
    _all?: true
  }

  export type WeekAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which week to aggregate.
     */
    where?: weekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weeks to fetch.
     */
    orderBy?: weekOrderByWithRelationInput | weekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: weekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned weeks
    **/
    _count?: true | WeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeekAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeekSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekMaxAggregateInputType
  }

  export type GetWeekAggregateType<T extends WeekAggregateArgs> = {
        [P in keyof T & keyof AggregateWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeek[P]>
      : GetScalarType<T[P], AggregateWeek[P]>
  }




  export type weekGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weekWhereInput
    orderBy?: weekOrderByWithAggregationInput | weekOrderByWithAggregationInput[]
    by: WeekScalarFieldEnum[] | WeekScalarFieldEnum
    having?: weekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekCountAggregateInputType | true
    _avg?: WeekAvgAggregateInputType
    _sum?: WeekSumAggregateInputType
    _min?: WeekMinAggregateInputType
    _max?: WeekMaxAggregateInputType
  }

  export type WeekGroupByOutputType = {
    id: number
    name: string
    league_id: number
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  type GetWeekGroupByPayload<T extends weekGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekGroupByOutputType[P]>
            : GetScalarType<T[P], WeekGroupByOutputType[P]>
        }
      >
    >


  export type weekSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    league_id?: boolean
    choice?: boolean | week$choiceArgs<ExtArgs>
    game?: boolean | week$gameArgs<ExtArgs>
    player_rate?: boolean | week$player_rateArgs<ExtArgs>
    league?: boolean | leagueDefaultArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["week"]>



  export type weekSelectScalar = {
    id?: boolean
    name?: boolean
    league_id?: boolean
  }

  export type weekOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "league_id", ExtArgs["result"]["week"]>
  export type weekInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choice?: boolean | week$choiceArgs<ExtArgs>
    game?: boolean | week$gameArgs<ExtArgs>
    player_rate?: boolean | week$player_rateArgs<ExtArgs>
    league?: boolean | leagueDefaultArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $weekPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "week"
    objects: {
      choice: Prisma.$choicePayload<ExtArgs>[]
      game: Prisma.$gamePayload<ExtArgs>[]
      player_rate: Prisma.$player_ratePayload<ExtArgs>[]
      league: Prisma.$leaguePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      league_id: number
    }, ExtArgs["result"]["week"]>
    composites: {}
  }

  type weekGetPayload<S extends boolean | null | undefined | weekDefaultArgs> = $Result.GetResult<Prisma.$weekPayload, S>

  type weekCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<weekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeekCountAggregateInputType | true
    }

  export interface weekDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['week'], meta: { name: 'week' } }
    /**
     * Find zero or one Week that matches the filter.
     * @param {weekFindUniqueArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends weekFindUniqueArgs>(args: SelectSubset<T, weekFindUniqueArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Week that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {weekFindUniqueOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends weekFindUniqueOrThrowArgs>(args: SelectSubset<T, weekFindUniqueOrThrowArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekFindFirstArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends weekFindFirstArgs>(args?: SelectSubset<T, weekFindFirstArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekFindFirstOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends weekFindFirstOrThrowArgs>(args?: SelectSubset<T, weekFindFirstOrThrowArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weeks
     * const weeks = await prisma.week.findMany()
     * 
     * // Get first 10 Weeks
     * const weeks = await prisma.week.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekWithIdOnly = await prisma.week.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends weekFindManyArgs>(args?: SelectSubset<T, weekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Week.
     * @param {weekCreateArgs} args - Arguments to create a Week.
     * @example
     * // Create one Week
     * const Week = await prisma.week.create({
     *   data: {
     *     // ... data to create a Week
     *   }
     * })
     * 
     */
    create<T extends weekCreateArgs>(args: SelectSubset<T, weekCreateArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weeks.
     * @param {weekCreateManyArgs} args - Arguments to create many Weeks.
     * @example
     * // Create many Weeks
     * const week = await prisma.week.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends weekCreateManyArgs>(args?: SelectSubset<T, weekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Week.
     * @param {weekDeleteArgs} args - Arguments to delete one Week.
     * @example
     * // Delete one Week
     * const Week = await prisma.week.delete({
     *   where: {
     *     // ... filter to delete one Week
     *   }
     * })
     * 
     */
    delete<T extends weekDeleteArgs>(args: SelectSubset<T, weekDeleteArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Week.
     * @param {weekUpdateArgs} args - Arguments to update one Week.
     * @example
     * // Update one Week
     * const week = await prisma.week.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends weekUpdateArgs>(args: SelectSubset<T, weekUpdateArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weeks.
     * @param {weekDeleteManyArgs} args - Arguments to filter Weeks to delete.
     * @example
     * // Delete a few Weeks
     * const { count } = await prisma.week.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends weekDeleteManyArgs>(args?: SelectSubset<T, weekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends weekUpdateManyArgs>(args: SelectSubset<T, weekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Week.
     * @param {weekUpsertArgs} args - Arguments to update or create a Week.
     * @example
     * // Update or create a Week
     * const week = await prisma.week.upsert({
     *   create: {
     *     // ... data to create a Week
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Week we want to update
     *   }
     * })
     */
    upsert<T extends weekUpsertArgs>(args: SelectSubset<T, weekUpsertArgs<ExtArgs>>): Prisma__weekClient<$Result.GetResult<Prisma.$weekPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekCountArgs} args - Arguments to filter Weeks to count.
     * @example
     * // Count the number of Weeks
     * const count = await prisma.week.count({
     *   where: {
     *     // ... the filter for the Weeks we want to count
     *   }
     * })
    **/
    count<T extends weekCountArgs>(
      args?: Subset<T, weekCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeekAggregateArgs>(args: Subset<T, WeekAggregateArgs>): Prisma.PrismaPromise<GetWeekAggregateType<T>>

    /**
     * Group by Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekGroupByArgs} args - Group by arguments.
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
      T extends weekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: weekGroupByArgs['orderBy'] }
        : { orderBy?: weekGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, weekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the week model
   */
  readonly fields: weekFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for week.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__weekClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    choice<T extends week$choiceArgs<ExtArgs> = {}>(args?: Subset<T, week$choiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game<T extends week$gameArgs<ExtArgs> = {}>(args?: Subset<T, week$gameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    player_rate<T extends week$player_rateArgs<ExtArgs> = {}>(args?: Subset<T, week$player_rateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_ratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    league<T extends leagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leagueDefaultArgs<ExtArgs>>): Prisma__leagueClient<$Result.GetResult<Prisma.$leaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the week model
   */
  interface weekFieldRefs {
    readonly id: FieldRef<"week", 'Int'>
    readonly name: FieldRef<"week", 'String'>
    readonly league_id: FieldRef<"week", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * week findUnique
   */
  export type weekFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * Filter, which week to fetch.
     */
    where: weekWhereUniqueInput
  }

  /**
   * week findUniqueOrThrow
   */
  export type weekFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * Filter, which week to fetch.
     */
    where: weekWhereUniqueInput
  }

  /**
   * week findFirst
   */
  export type weekFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * Filter, which week to fetch.
     */
    where?: weekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weeks to fetch.
     */
    orderBy?: weekOrderByWithRelationInput | weekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weeks.
     */
    cursor?: weekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * week findFirstOrThrow
   */
  export type weekFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * Filter, which week to fetch.
     */
    where?: weekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weeks to fetch.
     */
    orderBy?: weekOrderByWithRelationInput | weekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weeks.
     */
    cursor?: weekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * week findMany
   */
  export type weekFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * Filter, which weeks to fetch.
     */
    where?: weekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weeks to fetch.
     */
    orderBy?: weekOrderByWithRelationInput | weekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing weeks.
     */
    cursor?: weekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weeks.
     */
    skip?: number
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * week create
   */
  export type weekCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * The data needed to create a week.
     */
    data: XOR<weekCreateInput, weekUncheckedCreateInput>
  }

  /**
   * week createMany
   */
  export type weekCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many weeks.
     */
    data: weekCreateManyInput | weekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * week update
   */
  export type weekUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * The data needed to update a week.
     */
    data: XOR<weekUpdateInput, weekUncheckedUpdateInput>
    /**
     * Choose, which week to update.
     */
    where: weekWhereUniqueInput
  }

  /**
   * week updateMany
   */
  export type weekUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update weeks.
     */
    data: XOR<weekUpdateManyMutationInput, weekUncheckedUpdateManyInput>
    /**
     * Filter which weeks to update
     */
    where?: weekWhereInput
    /**
     * Limit how many weeks to update.
     */
    limit?: number
  }

  /**
   * week upsert
   */
  export type weekUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * The filter to search for the week to update in case it exists.
     */
    where: weekWhereUniqueInput
    /**
     * In case the week found by the `where` argument doesn't exist, create a new week with this data.
     */
    create: XOR<weekCreateInput, weekUncheckedCreateInput>
    /**
     * In case the week was found with the provided `where` argument, update it with this data.
     */
    update: XOR<weekUpdateInput, weekUncheckedUpdateInput>
  }

  /**
   * week delete
   */
  export type weekDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
    /**
     * Filter which week to delete.
     */
    where: weekWhereUniqueInput
  }

  /**
   * week deleteMany
   */
  export type weekDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weeks to delete
     */
    where?: weekWhereInput
    /**
     * Limit how many weeks to delete.
     */
    limit?: number
  }

  /**
   * week.choice
   */
  export type week$choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: choiceInclude<ExtArgs> | null
    where?: choiceWhereInput
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    cursor?: choiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * week.game
   */
  export type week$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    cursor?: gameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * week.player_rate
   */
  export type week$player_rateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_rate
     */
    select?: player_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_rate
     */
    omit?: player_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_rateInclude<ExtArgs> | null
    where?: player_rateWhereInput
    orderBy?: player_rateOrderByWithRelationInput | player_rateOrderByWithRelationInput[]
    cursor?: player_rateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_rateScalarFieldEnum | Player_rateScalarFieldEnum[]
  }

  /**
   * week without action
   */
  export type weekDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the week
     */
    select?: weekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the week
     */
    omit?: weekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekInclude<ExtArgs> | null
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


  export const Alembic_versionScalarFieldEnum: {
    version_num: 'version_num'
  };

  export type Alembic_versionScalarFieldEnum = (typeof Alembic_versionScalarFieldEnum)[keyof typeof Alembic_versionScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    week_id: 'week_id',
    user_id: 'user_id',
    player_id: 'player_id',
    points: 'points'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const Doctrine_migration_versionsScalarFieldEnum: {
    version: 'version',
    executed_at: 'executed_at',
    execution_time: 'execution_time'
  };

  export type Doctrine_migration_versionsScalarFieldEnum = (typeof Doctrine_migration_versionsScalarFieldEnum)[keyof typeof Doctrine_migration_versionsScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    team_home_id: 'team_home_id',
    team_away_id: 'team_away_id',
    week_id: 'week_id'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const LeagueScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LeagueScalarFieldEnum = (typeof LeagueScalarFieldEnum)[keyof typeof LeagueScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    forename: 'forename',
    name: 'name',
    rating: 'rating',
    selected: 'selected'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const Player_choiceScalarFieldEnum: {
    player_id: 'player_id',
    choice_id: 'choice_id'
  };

  export type Player_choiceScalarFieldEnum = (typeof Player_choiceScalarFieldEnum)[keyof typeof Player_choiceScalarFieldEnum]


  export const Player_rateScalarFieldEnum: {
    id: 'id',
    player_id: 'player_id',
    week_id: 'week_id',
    rate: 'rate'
  };

  export type Player_rateScalarFieldEnum = (typeof Player_rateScalarFieldEnum)[keyof typeof Player_rateScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    league_id: 'league_id'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    roles: 'roles',
    password: 'password',
    pseudo: 'pseudo',
    ptl_lfb: 'ptl_lfb',
    pt_lf2: 'pt_lf2',
    reset_token: 'reset_token',
    clerk_id: 'clerk_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WeekScalarFieldEnum: {
    id: 'id',
    name: 'name',
    league_id: 'league_id'
  };

  export type WeekScalarFieldEnum = (typeof WeekScalarFieldEnum)[keyof typeof WeekScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const alembic_versionOrderByRelevanceFieldEnum: {
    version_num: 'version_num'
  };

  export type alembic_versionOrderByRelevanceFieldEnum = (typeof alembic_versionOrderByRelevanceFieldEnum)[keyof typeof alembic_versionOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const badgeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type badgeOrderByRelevanceFieldEnum = (typeof badgeOrderByRelevanceFieldEnum)[keyof typeof badgeOrderByRelevanceFieldEnum]


  export const doctrine_migration_versionsOrderByRelevanceFieldEnum: {
    version: 'version'
  };

  export type doctrine_migration_versionsOrderByRelevanceFieldEnum = (typeof doctrine_migration_versionsOrderByRelevanceFieldEnum)[keyof typeof doctrine_migration_versionsOrderByRelevanceFieldEnum]


  export const leagueOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type leagueOrderByRelevanceFieldEnum = (typeof leagueOrderByRelevanceFieldEnum)[keyof typeof leagueOrderByRelevanceFieldEnum]


  export const playerOrderByRelevanceFieldEnum: {
    forename: 'forename',
    name: 'name'
  };

  export type playerOrderByRelevanceFieldEnum = (typeof playerOrderByRelevanceFieldEnum)[keyof typeof playerOrderByRelevanceFieldEnum]


  export const teamOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type teamOrderByRelevanceFieldEnum = (typeof teamOrderByRelevanceFieldEnum)[keyof typeof teamOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    email: 'email',
    roles: 'roles',
    password: 'password',
    pseudo: 'pseudo',
    reset_token: 'reset_token',
    clerk_id: 'clerk_id'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const weekOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type weekOrderByRelevanceFieldEnum = (typeof weekOrderByRelevanceFieldEnum)[keyof typeof weekOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type alembic_versionWhereInput = {
    AND?: alembic_versionWhereInput | alembic_versionWhereInput[]
    OR?: alembic_versionWhereInput[]
    NOT?: alembic_versionWhereInput | alembic_versionWhereInput[]
    version_num?: StringFilter<"alembic_version"> | string
  }

  export type alembic_versionOrderByWithRelationInput = {
    version_num?: SortOrder
    _relevance?: alembic_versionOrderByRelevanceInput
  }

  export type alembic_versionWhereUniqueInput = Prisma.AtLeast<{
    version_num?: string
    AND?: alembic_versionWhereInput | alembic_versionWhereInput[]
    OR?: alembic_versionWhereInput[]
    NOT?: alembic_versionWhereInput | alembic_versionWhereInput[]
  }, "version_num">

  export type alembic_versionOrderByWithAggregationInput = {
    version_num?: SortOrder
    _count?: alembic_versionCountOrderByAggregateInput
    _max?: alembic_versionMaxOrderByAggregateInput
    _min?: alembic_versionMinOrderByAggregateInput
  }

  export type alembic_versionScalarWhereWithAggregatesInput = {
    AND?: alembic_versionScalarWhereWithAggregatesInput | alembic_versionScalarWhereWithAggregatesInput[]
    OR?: alembic_versionScalarWhereWithAggregatesInput[]
    NOT?: alembic_versionScalarWhereWithAggregatesInput | alembic_versionScalarWhereWithAggregatesInput[]
    version_num?: StringWithAggregatesFilter<"alembic_version"> | string
  }

  export type badgeWhereInput = {
    AND?: badgeWhereInput | badgeWhereInput[]
    OR?: badgeWhereInput[]
    NOT?: badgeWhereInput | badgeWhereInput[]
    id?: IntFilter<"badge"> | number
    user_id?: IntNullableFilter<"badge"> | number | null
    name?: StringFilter<"badge"> | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type badgeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: badgeOrderByRelevanceInput
  }

  export type badgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: badgeWhereInput | badgeWhereInput[]
    OR?: badgeWhereInput[]
    NOT?: badgeWhereInput | badgeWhereInput[]
    name?: StringFilter<"badge"> | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "user_id">

  export type badgeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: badgeCountOrderByAggregateInput
    _avg?: badgeAvgOrderByAggregateInput
    _max?: badgeMaxOrderByAggregateInput
    _min?: badgeMinOrderByAggregateInput
    _sum?: badgeSumOrderByAggregateInput
  }

  export type badgeScalarWhereWithAggregatesInput = {
    AND?: badgeScalarWhereWithAggregatesInput | badgeScalarWhereWithAggregatesInput[]
    OR?: badgeScalarWhereWithAggregatesInput[]
    NOT?: badgeScalarWhereWithAggregatesInput | badgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"badge"> | number
    user_id?: IntNullableWithAggregatesFilter<"badge"> | number | null
    name?: StringWithAggregatesFilter<"badge"> | string
  }

  export type choiceWhereInput = {
    AND?: choiceWhereInput | choiceWhereInput[]
    OR?: choiceWhereInput[]
    NOT?: choiceWhereInput | choiceWhereInput[]
    id?: IntFilter<"choice"> | number
    week_id?: IntFilter<"choice"> | number
    user_id?: IntFilter<"choice"> | number
    player_id?: IntFilter<"choice"> | number
    points?: FloatNullableFilter<"choice"> | number | null
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    week?: XOR<WeekScalarRelationFilter, weekWhereInput>
    player_choice?: Player_choiceListRelationFilter
  }

  export type choiceOrderByWithRelationInput = {
    id?: SortOrder
    week_id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    points?: SortOrderInput | SortOrder
    player?: playerOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    week?: weekOrderByWithRelationInput
    player_choice?: player_choiceOrderByRelationAggregateInput
  }

  export type choiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: choiceWhereInput | choiceWhereInput[]
    OR?: choiceWhereInput[]
    NOT?: choiceWhereInput | choiceWhereInput[]
    week_id?: IntFilter<"choice"> | number
    user_id?: IntFilter<"choice"> | number
    player_id?: IntFilter<"choice"> | number
    points?: FloatNullableFilter<"choice"> | number | null
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    week?: XOR<WeekScalarRelationFilter, weekWhereInput>
    player_choice?: Player_choiceListRelationFilter
  }, "id">

  export type choiceOrderByWithAggregationInput = {
    id?: SortOrder
    week_id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    points?: SortOrderInput | SortOrder
    _count?: choiceCountOrderByAggregateInput
    _avg?: choiceAvgOrderByAggregateInput
    _max?: choiceMaxOrderByAggregateInput
    _min?: choiceMinOrderByAggregateInput
    _sum?: choiceSumOrderByAggregateInput
  }

  export type choiceScalarWhereWithAggregatesInput = {
    AND?: choiceScalarWhereWithAggregatesInput | choiceScalarWhereWithAggregatesInput[]
    OR?: choiceScalarWhereWithAggregatesInput[]
    NOT?: choiceScalarWhereWithAggregatesInput | choiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"choice"> | number
    week_id?: IntWithAggregatesFilter<"choice"> | number
    user_id?: IntWithAggregatesFilter<"choice"> | number
    player_id?: IntWithAggregatesFilter<"choice"> | number
    points?: FloatNullableWithAggregatesFilter<"choice"> | number | null
  }

  export type doctrine_migration_versionsWhereInput = {
    AND?: doctrine_migration_versionsWhereInput | doctrine_migration_versionsWhereInput[]
    OR?: doctrine_migration_versionsWhereInput[]
    NOT?: doctrine_migration_versionsWhereInput | doctrine_migration_versionsWhereInput[]
    version?: StringFilter<"doctrine_migration_versions"> | string
    executed_at?: DateTimeNullableFilter<"doctrine_migration_versions"> | Date | string | null
    execution_time?: IntNullableFilter<"doctrine_migration_versions"> | number | null
  }

  export type doctrine_migration_versionsOrderByWithRelationInput = {
    version?: SortOrder
    executed_at?: SortOrderInput | SortOrder
    execution_time?: SortOrderInput | SortOrder
    _relevance?: doctrine_migration_versionsOrderByRelevanceInput
  }

  export type doctrine_migration_versionsWhereUniqueInput = Prisma.AtLeast<{
    version?: string
    AND?: doctrine_migration_versionsWhereInput | doctrine_migration_versionsWhereInput[]
    OR?: doctrine_migration_versionsWhereInput[]
    NOT?: doctrine_migration_versionsWhereInput | doctrine_migration_versionsWhereInput[]
    executed_at?: DateTimeNullableFilter<"doctrine_migration_versions"> | Date | string | null
    execution_time?: IntNullableFilter<"doctrine_migration_versions"> | number | null
  }, "version">

  export type doctrine_migration_versionsOrderByWithAggregationInput = {
    version?: SortOrder
    executed_at?: SortOrderInput | SortOrder
    execution_time?: SortOrderInput | SortOrder
    _count?: doctrine_migration_versionsCountOrderByAggregateInput
    _avg?: doctrine_migration_versionsAvgOrderByAggregateInput
    _max?: doctrine_migration_versionsMaxOrderByAggregateInput
    _min?: doctrine_migration_versionsMinOrderByAggregateInput
    _sum?: doctrine_migration_versionsSumOrderByAggregateInput
  }

  export type doctrine_migration_versionsScalarWhereWithAggregatesInput = {
    AND?: doctrine_migration_versionsScalarWhereWithAggregatesInput | doctrine_migration_versionsScalarWhereWithAggregatesInput[]
    OR?: doctrine_migration_versionsScalarWhereWithAggregatesInput[]
    NOT?: doctrine_migration_versionsScalarWhereWithAggregatesInput | doctrine_migration_versionsScalarWhereWithAggregatesInput[]
    version?: StringWithAggregatesFilter<"doctrine_migration_versions"> | string
    executed_at?: DateTimeNullableWithAggregatesFilter<"doctrine_migration_versions"> | Date | string | null
    execution_time?: IntNullableWithAggregatesFilter<"doctrine_migration_versions"> | number | null
  }

  export type gameWhereInput = {
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    id?: IntFilter<"game"> | number
    team_home_id?: IntNullableFilter<"game"> | number | null
    team_away_id?: IntFilter<"game"> | number
    week_id?: IntFilter<"game"> | number
    team_home?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    team_away?: XOR<TeamScalarRelationFilter, teamWhereInput>
    week?: XOR<WeekScalarRelationFilter, weekWhereInput>
  }

  export type gameOrderByWithRelationInput = {
    id?: SortOrder
    team_home_id?: SortOrderInput | SortOrder
    team_away_id?: SortOrder
    week_id?: SortOrder
    team_home?: teamOrderByWithRelationInput
    team_away?: teamOrderByWithRelationInput
    week?: weekOrderByWithRelationInput
  }

  export type gameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    team_home_id_team_away_id_week_id?: gameTeam_home_idTeam_away_idWeek_idCompoundUniqueInput
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    team_home_id?: IntNullableFilter<"game"> | number | null
    team_away_id?: IntFilter<"game"> | number
    week_id?: IntFilter<"game"> | number
    team_home?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    team_away?: XOR<TeamScalarRelationFilter, teamWhereInput>
    week?: XOR<WeekScalarRelationFilter, weekWhereInput>
  }, "id" | "team_home_id_team_away_id_week_id">

  export type gameOrderByWithAggregationInput = {
    id?: SortOrder
    team_home_id?: SortOrderInput | SortOrder
    team_away_id?: SortOrder
    week_id?: SortOrder
    _count?: gameCountOrderByAggregateInput
    _avg?: gameAvgOrderByAggregateInput
    _max?: gameMaxOrderByAggregateInput
    _min?: gameMinOrderByAggregateInput
    _sum?: gameSumOrderByAggregateInput
  }

  export type gameScalarWhereWithAggregatesInput = {
    AND?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    OR?: gameScalarWhereWithAggregatesInput[]
    NOT?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"game"> | number
    team_home_id?: IntNullableWithAggregatesFilter<"game"> | number | null
    team_away_id?: IntWithAggregatesFilter<"game"> | number
    week_id?: IntWithAggregatesFilter<"game"> | number
  }

  export type leagueWhereInput = {
    AND?: leagueWhereInput | leagueWhereInput[]
    OR?: leagueWhereInput[]
    NOT?: leagueWhereInput | leagueWhereInput[]
    id?: IntFilter<"league"> | number
    name?: StringFilter<"league"> | string
    team?: TeamListRelationFilter
    week?: WeekListRelationFilter
  }

  export type leagueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    team?: teamOrderByRelationAggregateInput
    week?: weekOrderByRelationAggregateInput
    _relevance?: leagueOrderByRelevanceInput
  }

  export type leagueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: leagueWhereInput | leagueWhereInput[]
    OR?: leagueWhereInput[]
    NOT?: leagueWhereInput | leagueWhereInput[]
    name?: StringFilter<"league"> | string
    team?: TeamListRelationFilter
    week?: WeekListRelationFilter
  }, "id">

  export type leagueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: leagueCountOrderByAggregateInput
    _avg?: leagueAvgOrderByAggregateInput
    _max?: leagueMaxOrderByAggregateInput
    _min?: leagueMinOrderByAggregateInput
    _sum?: leagueSumOrderByAggregateInput
  }

  export type leagueScalarWhereWithAggregatesInput = {
    AND?: leagueScalarWhereWithAggregatesInput | leagueScalarWhereWithAggregatesInput[]
    OR?: leagueScalarWhereWithAggregatesInput[]
    NOT?: leagueScalarWhereWithAggregatesInput | leagueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"league"> | number
    name?: StringWithAggregatesFilter<"league"> | string
  }

  export type playerWhereInput = {
    AND?: playerWhereInput | playerWhereInput[]
    OR?: playerWhereInput[]
    NOT?: playerWhereInput | playerWhereInput[]
    id?: IntFilter<"player"> | number
    team_id?: IntNullableFilter<"player"> | number | null
    forename?: StringNullableFilter<"player"> | string | null
    name?: StringNullableFilter<"player"> | string | null
    rating?: FloatNullableFilter<"player"> | number | null
    selected?: BoolFilter<"player"> | boolean
    choice?: ChoiceListRelationFilter
    team?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    player_choice?: Player_choiceListRelationFilter
    player_rate?: Player_rateListRelationFilter
  }

  export type playerOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrderInput | SortOrder
    forename?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    selected?: SortOrder
    choice?: choiceOrderByRelationAggregateInput
    team?: teamOrderByWithRelationInput
    player_choice?: player_choiceOrderByRelationAggregateInput
    player_rate?: player_rateOrderByRelationAggregateInput
    _relevance?: playerOrderByRelevanceInput
  }

  export type playerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playerWhereInput | playerWhereInput[]
    OR?: playerWhereInput[]
    NOT?: playerWhereInput | playerWhereInput[]
    team_id?: IntNullableFilter<"player"> | number | null
    forename?: StringNullableFilter<"player"> | string | null
    name?: StringNullableFilter<"player"> | string | null
    rating?: FloatNullableFilter<"player"> | number | null
    selected?: BoolFilter<"player"> | boolean
    choice?: ChoiceListRelationFilter
    team?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    player_choice?: Player_choiceListRelationFilter
    player_rate?: Player_rateListRelationFilter
  }, "id">

  export type playerOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrderInput | SortOrder
    forename?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    selected?: SortOrder
    _count?: playerCountOrderByAggregateInput
    _avg?: playerAvgOrderByAggregateInput
    _max?: playerMaxOrderByAggregateInput
    _min?: playerMinOrderByAggregateInput
    _sum?: playerSumOrderByAggregateInput
  }

  export type playerScalarWhereWithAggregatesInput = {
    AND?: playerScalarWhereWithAggregatesInput | playerScalarWhereWithAggregatesInput[]
    OR?: playerScalarWhereWithAggregatesInput[]
    NOT?: playerScalarWhereWithAggregatesInput | playerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"player"> | number
    team_id?: IntNullableWithAggregatesFilter<"player"> | number | null
    forename?: StringNullableWithAggregatesFilter<"player"> | string | null
    name?: StringNullableWithAggregatesFilter<"player"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"player"> | number | null
    selected?: BoolWithAggregatesFilter<"player"> | boolean
  }

  export type player_choiceWhereInput = {
    AND?: player_choiceWhereInput | player_choiceWhereInput[]
    OR?: player_choiceWhereInput[]
    NOT?: player_choiceWhereInput | player_choiceWhereInput[]
    player_id?: IntFilter<"player_choice"> | number
    choice_id?: IntFilter<"player_choice"> | number
    choice?: XOR<ChoiceScalarRelationFilter, choiceWhereInput>
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
  }

  export type player_choiceOrderByWithRelationInput = {
    player_id?: SortOrder
    choice_id?: SortOrder
    choice?: choiceOrderByWithRelationInput
    player?: playerOrderByWithRelationInput
  }

  export type player_choiceWhereUniqueInput = Prisma.AtLeast<{
    player_id_choice_id?: player_choicePlayer_idChoice_idCompoundUniqueInput
    AND?: player_choiceWhereInput | player_choiceWhereInput[]
    OR?: player_choiceWhereInput[]
    NOT?: player_choiceWhereInput | player_choiceWhereInput[]
    player_id?: IntFilter<"player_choice"> | number
    choice_id?: IntFilter<"player_choice"> | number
    choice?: XOR<ChoiceScalarRelationFilter, choiceWhereInput>
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
  }, "player_id_choice_id">

  export type player_choiceOrderByWithAggregationInput = {
    player_id?: SortOrder
    choice_id?: SortOrder
    _count?: player_choiceCountOrderByAggregateInput
    _avg?: player_choiceAvgOrderByAggregateInput
    _max?: player_choiceMaxOrderByAggregateInput
    _min?: player_choiceMinOrderByAggregateInput
    _sum?: player_choiceSumOrderByAggregateInput
  }

  export type player_choiceScalarWhereWithAggregatesInput = {
    AND?: player_choiceScalarWhereWithAggregatesInput | player_choiceScalarWhereWithAggregatesInput[]
    OR?: player_choiceScalarWhereWithAggregatesInput[]
    NOT?: player_choiceScalarWhereWithAggregatesInput | player_choiceScalarWhereWithAggregatesInput[]
    player_id?: IntWithAggregatesFilter<"player_choice"> | number
    choice_id?: IntWithAggregatesFilter<"player_choice"> | number
  }

  export type player_rateWhereInput = {
    AND?: player_rateWhereInput | player_rateWhereInput[]
    OR?: player_rateWhereInput[]
    NOT?: player_rateWhereInput | player_rateWhereInput[]
    id?: IntFilter<"player_rate"> | number
    player_id?: IntFilter<"player_rate"> | number
    week_id?: IntFilter<"player_rate"> | number
    rate?: FloatFilter<"player_rate"> | number
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    week?: XOR<WeekScalarRelationFilter, weekWhereInput>
  }

  export type player_rateOrderByWithRelationInput = {
    id?: SortOrder
    player_id?: SortOrder
    week_id?: SortOrder
    rate?: SortOrder
    player?: playerOrderByWithRelationInput
    week?: weekOrderByWithRelationInput
  }

  export type player_rateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: player_rateWhereInput | player_rateWhereInput[]
    OR?: player_rateWhereInput[]
    NOT?: player_rateWhereInput | player_rateWhereInput[]
    player_id?: IntFilter<"player_rate"> | number
    week_id?: IntFilter<"player_rate"> | number
    rate?: FloatFilter<"player_rate"> | number
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    week?: XOR<WeekScalarRelationFilter, weekWhereInput>
  }, "id">

  export type player_rateOrderByWithAggregationInput = {
    id?: SortOrder
    player_id?: SortOrder
    week_id?: SortOrder
    rate?: SortOrder
    _count?: player_rateCountOrderByAggregateInput
    _avg?: player_rateAvgOrderByAggregateInput
    _max?: player_rateMaxOrderByAggregateInput
    _min?: player_rateMinOrderByAggregateInput
    _sum?: player_rateSumOrderByAggregateInput
  }

  export type player_rateScalarWhereWithAggregatesInput = {
    AND?: player_rateScalarWhereWithAggregatesInput | player_rateScalarWhereWithAggregatesInput[]
    OR?: player_rateScalarWhereWithAggregatesInput[]
    NOT?: player_rateScalarWhereWithAggregatesInput | player_rateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"player_rate"> | number
    player_id?: IntWithAggregatesFilter<"player_rate"> | number
    week_id?: IntWithAggregatesFilter<"player_rate"> | number
    rate?: FloatWithAggregatesFilter<"player_rate"> | number
  }

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    id?: IntFilter<"team"> | number
    name?: StringFilter<"team"> | string
    league_id?: IntFilter<"team"> | number
    home_games?: GameListRelationFilter
    away_games?: GameListRelationFilter
    players?: PlayerListRelationFilter
    league?: XOR<LeagueScalarRelationFilter, leagueWhereInput>
  }

  export type teamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
    home_games?: gameOrderByRelationAggregateInput
    away_games?: gameOrderByRelationAggregateInput
    players?: playerOrderByRelationAggregateInput
    league?: leagueOrderByWithRelationInput
    _relevance?: teamOrderByRelevanceInput
  }

  export type teamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    name?: StringFilter<"team"> | string
    league_id?: IntFilter<"team"> | number
    home_games?: GameListRelationFilter
    away_games?: GameListRelationFilter
    players?: PlayerListRelationFilter
    league?: XOR<LeagueScalarRelationFilter, leagueWhereInput>
  }, "id">

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
    _count?: teamCountOrderByAggregateInput
    _avg?: teamAvgOrderByAggregateInput
    _max?: teamMaxOrderByAggregateInput
    _min?: teamMinOrderByAggregateInput
    _sum?: teamSumOrderByAggregateInput
  }

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    OR?: teamScalarWhereWithAggregatesInput[]
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"team"> | number
    name?: StringWithAggregatesFilter<"team"> | string
    league_id?: IntWithAggregatesFilter<"team"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    roles?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    pseudo?: StringNullableFilter<"user"> | string | null
    ptl_lfb?: FloatFilter<"user"> | number
    pt_lf2?: FloatFilter<"user"> | number
    reset_token?: StringNullableFilter<"user"> | string | null
    clerk_id?: StringFilter<"user"> | string
    badge?: XOR<BadgeNullableScalarRelationFilter, badgeWhereInput> | null
    choice?: ChoiceListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    roles?: SortOrder
    password?: SortOrder
    pseudo?: SortOrderInput | SortOrder
    ptl_lfb?: SortOrder
    pt_lf2?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    clerk_id?: SortOrder
    badge?: badgeOrderByWithRelationInput
    choice?: choiceOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    pseudo?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    roles?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    ptl_lfb?: FloatFilter<"user"> | number
    pt_lf2?: FloatFilter<"user"> | number
    reset_token?: StringNullableFilter<"user"> | string | null
    clerk_id?: StringFilter<"user"> | string
    badge?: XOR<BadgeNullableScalarRelationFilter, badgeWhereInput> | null
    choice?: ChoiceListRelationFilter
  }, "id" | "email" | "pseudo">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    roles?: SortOrder
    password?: SortOrder
    pseudo?: SortOrderInput | SortOrder
    ptl_lfb?: SortOrder
    pt_lf2?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    clerk_id?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    roles?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    pseudo?: StringNullableWithAggregatesFilter<"user"> | string | null
    ptl_lfb?: FloatWithAggregatesFilter<"user"> | number
    pt_lf2?: FloatWithAggregatesFilter<"user"> | number
    reset_token?: StringNullableWithAggregatesFilter<"user"> | string | null
    clerk_id?: StringWithAggregatesFilter<"user"> | string
  }

  export type weekWhereInput = {
    AND?: weekWhereInput | weekWhereInput[]
    OR?: weekWhereInput[]
    NOT?: weekWhereInput | weekWhereInput[]
    id?: IntFilter<"week"> | number
    name?: StringFilter<"week"> | string
    league_id?: IntFilter<"week"> | number
    choice?: ChoiceListRelationFilter
    game?: GameListRelationFilter
    player_rate?: Player_rateListRelationFilter
    league?: XOR<LeagueScalarRelationFilter, leagueWhereInput>
  }

  export type weekOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
    choice?: choiceOrderByRelationAggregateInput
    game?: gameOrderByRelationAggregateInput
    player_rate?: player_rateOrderByRelationAggregateInput
    league?: leagueOrderByWithRelationInput
    _relevance?: weekOrderByRelevanceInput
  }

  export type weekWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: weekWhereInput | weekWhereInput[]
    OR?: weekWhereInput[]
    NOT?: weekWhereInput | weekWhereInput[]
    name?: StringFilter<"week"> | string
    league_id?: IntFilter<"week"> | number
    choice?: ChoiceListRelationFilter
    game?: GameListRelationFilter
    player_rate?: Player_rateListRelationFilter
    league?: XOR<LeagueScalarRelationFilter, leagueWhereInput>
  }, "id">

  export type weekOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
    _count?: weekCountOrderByAggregateInput
    _avg?: weekAvgOrderByAggregateInput
    _max?: weekMaxOrderByAggregateInput
    _min?: weekMinOrderByAggregateInput
    _sum?: weekSumOrderByAggregateInput
  }

  export type weekScalarWhereWithAggregatesInput = {
    AND?: weekScalarWhereWithAggregatesInput | weekScalarWhereWithAggregatesInput[]
    OR?: weekScalarWhereWithAggregatesInput[]
    NOT?: weekScalarWhereWithAggregatesInput | weekScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"week"> | number
    name?: StringWithAggregatesFilter<"week"> | string
    league_id?: IntWithAggregatesFilter<"week"> | number
  }

  export type alembic_versionCreateInput = {
    version_num: string
  }

  export type alembic_versionUncheckedCreateInput = {
    version_num: string
  }

  export type alembic_versionUpdateInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionUncheckedUpdateInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionCreateManyInput = {
    version_num: string
  }

  export type alembic_versionUpdateManyMutationInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type alembic_versionUncheckedUpdateManyInput = {
    version_num?: StringFieldUpdateOperationsInput | string
  }

  export type badgeCreateInput = {
    name: string
    user?: userCreateNestedOneWithoutBadgeInput
  }

  export type badgeUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    name: string
  }

  export type badgeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneWithoutBadgeNestedInput
  }

  export type badgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type badgeCreateManyInput = {
    id?: number
    user_id?: number | null
    name: string
  }

  export type badgeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type badgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type choiceCreateInput = {
    points?: number | null
    player: playerCreateNestedOneWithoutChoiceInput
    user: userCreateNestedOneWithoutChoiceInput
    week: weekCreateNestedOneWithoutChoiceInput
    player_choice?: player_choiceCreateNestedManyWithoutChoiceInput
  }

  export type choiceUncheckedCreateInput = {
    id?: number
    week_id: number
    user_id: number
    player_id: number
    points?: number | null
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type choiceUpdateInput = {
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: playerUpdateOneRequiredWithoutChoiceNestedInput
    user?: userUpdateOneRequiredWithoutChoiceNestedInput
    week?: weekUpdateOneRequiredWithoutChoiceNestedInput
    player_choice?: player_choiceUpdateManyWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player_choice?: player_choiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type choiceCreateManyInput = {
    id?: number
    week_id: number
    user_id: number
    player_id: number
    points?: number | null
  }

  export type choiceUpdateManyMutationInput = {
    points?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type choiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type doctrine_migration_versionsCreateInput = {
    version: string
    executed_at?: Date | string | null
    execution_time?: number | null
  }

  export type doctrine_migration_versionsUncheckedCreateInput = {
    version: string
    executed_at?: Date | string | null
    execution_time?: number | null
  }

  export type doctrine_migration_versionsUpdateInput = {
    version?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type doctrine_migration_versionsUncheckedUpdateInput = {
    version?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type doctrine_migration_versionsCreateManyInput = {
    version: string
    executed_at?: Date | string | null
    execution_time?: number | null
  }

  export type doctrine_migration_versionsUpdateManyMutationInput = {
    version?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type doctrine_migration_versionsUncheckedUpdateManyInput = {
    version?: StringFieldUpdateOperationsInput | string
    executed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_time?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gameCreateInput = {
    team_home?: teamCreateNestedOneWithoutHome_gamesInput
    team_away: teamCreateNestedOneWithoutAway_gamesInput
    week: weekCreateNestedOneWithoutGameInput
  }

  export type gameUncheckedCreateInput = {
    id?: number
    team_home_id?: number | null
    team_away_id: number
    week_id: number
  }

  export type gameUpdateInput = {
    team_home?: teamUpdateOneWithoutHome_gamesNestedInput
    team_away?: teamUpdateOneRequiredWithoutAway_gamesNestedInput
    week?: weekUpdateOneRequiredWithoutGameNestedInput
  }

  export type gameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_home_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_away_id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
  }

  export type gameCreateManyInput = {
    id?: number
    team_home_id?: number | null
    team_away_id: number
    week_id: number
  }

  export type gameUpdateManyMutationInput = {

  }

  export type gameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_home_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_away_id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
  }

  export type leagueCreateInput = {
    name: string
    team?: teamCreateNestedManyWithoutLeagueInput
    week?: weekCreateNestedManyWithoutLeagueInput
  }

  export type leagueUncheckedCreateInput = {
    id?: number
    name: string
    team?: teamUncheckedCreateNestedManyWithoutLeagueInput
    week?: weekUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type leagueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    team?: teamUpdateManyWithoutLeagueNestedInput
    week?: weekUpdateManyWithoutLeagueNestedInput
  }

  export type leagueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    team?: teamUncheckedUpdateManyWithoutLeagueNestedInput
    week?: weekUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type leagueCreateManyInput = {
    id?: number
    name: string
  }

  export type leagueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type leagueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type playerCreateInput = {
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceCreateNestedManyWithoutPlayerInput
    team?: teamCreateNestedOneWithoutPlayersInput
    player_choice?: player_choiceCreateNestedManyWithoutPlayerInput
    player_rate?: player_rateCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateInput = {
    id?: number
    team_id?: number | null
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceUncheckedCreateNestedManyWithoutPlayerInput
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutPlayerInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerUpdateInput = {
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUpdateManyWithoutPlayerNestedInput
    team?: teamUpdateOneWithoutPlayersNestedInput
    player_choice?: player_choiceUpdateManyWithoutPlayerNestedInput
    player_rate?: player_rateUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUncheckedUpdateManyWithoutPlayerNestedInput
    player_choice?: player_choiceUncheckedUpdateManyWithoutPlayerNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type playerCreateManyInput = {
    id?: number
    team_id?: number | null
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
  }

  export type playerUpdateManyMutationInput = {
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
  }

  export type playerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
  }

  export type player_choiceCreateInput = {
    choice: choiceCreateNestedOneWithoutPlayer_choiceInput
    player: playerCreateNestedOneWithoutPlayer_choiceInput
  }

  export type player_choiceUncheckedCreateInput = {
    player_id: number
    choice_id: number
  }

  export type player_choiceUpdateInput = {
    choice?: choiceUpdateOneRequiredWithoutPlayer_choiceNestedInput
    player?: playerUpdateOneRequiredWithoutPlayer_choiceNestedInput
  }

  export type player_choiceUncheckedUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_choiceCreateManyInput = {
    player_id: number
    choice_id: number
  }

  export type player_choiceUpdateManyMutationInput = {

  }

  export type player_choiceUncheckedUpdateManyInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_rateCreateInput = {
    rate: number
    player: playerCreateNestedOneWithoutPlayer_rateInput
    week: weekCreateNestedOneWithoutPlayer_rateInput
  }

  export type player_rateUncheckedCreateInput = {
    id?: number
    player_id: number
    week_id: number
    rate: number
  }

  export type player_rateUpdateInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    player?: playerUpdateOneRequiredWithoutPlayer_rateNestedInput
    week?: weekUpdateOneRequiredWithoutPlayer_rateNestedInput
  }

  export type player_rateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type player_rateCreateManyInput = {
    id?: number
    player_id: number
    week_id: number
    rate: number
  }

  export type player_rateUpdateManyMutationInput = {
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type player_rateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type teamCreateInput = {
    name: string
    home_games?: gameCreateNestedManyWithoutTeam_homeInput
    away_games?: gameCreateNestedManyWithoutTeam_awayInput
    players?: playerCreateNestedManyWithoutTeamInput
    league: leagueCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateInput = {
    id?: number
    name: string
    league_id: number
    home_games?: gameUncheckedCreateNestedManyWithoutTeam_homeInput
    away_games?: gameUncheckedCreateNestedManyWithoutTeam_awayInput
    players?: playerUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    home_games?: gameUpdateManyWithoutTeam_homeNestedInput
    away_games?: gameUpdateManyWithoutTeam_awayNestedInput
    players?: playerUpdateManyWithoutTeamNestedInput
    league?: leagueUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    home_games?: gameUncheckedUpdateManyWithoutTeam_homeNestedInput
    away_games?: gameUncheckedUpdateManyWithoutTeam_awayNestedInput
    players?: playerUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateManyInput = {
    id?: number
    name: string
    league_id: number
  }

  export type teamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    email: string
    roles: string
    password: string
    pseudo?: string | null
    ptl_lfb?: number
    pt_lf2?: number
    reset_token?: string | null
    clerk_id: string
    badge?: badgeCreateNestedOneWithoutUserInput
    choice?: choiceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    email: string
    roles: string
    password: string
    pseudo?: string | null
    ptl_lfb?: number
    pt_lf2?: number
    reset_token?: string | null
    clerk_id: string
    badge?: badgeUncheckedCreateNestedOneWithoutUserInput
    choice?: choiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
    badge?: badgeUpdateOneWithoutUserNestedInput
    choice?: choiceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
    badge?: badgeUncheckedUpdateOneWithoutUserNestedInput
    choice?: choiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    email: string
    roles: string
    password: string
    pseudo?: string | null
    ptl_lfb?: number
    pt_lf2?: number
    reset_token?: string | null
    clerk_id: string
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
  }

  export type weekCreateInput = {
    name: string
    choice?: choiceCreateNestedManyWithoutWeekInput
    game?: gameCreateNestedManyWithoutWeekInput
    player_rate?: player_rateCreateNestedManyWithoutWeekInput
    league: leagueCreateNestedOneWithoutWeekInput
  }

  export type weekUncheckedCreateInput = {
    id?: number
    name: string
    league_id: number
    choice?: choiceUncheckedCreateNestedManyWithoutWeekInput
    game?: gameUncheckedCreateNestedManyWithoutWeekInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutWeekInput
  }

  export type weekUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    choice?: choiceUpdateManyWithoutWeekNestedInput
    game?: gameUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUpdateManyWithoutWeekNestedInput
    league?: leagueUpdateOneRequiredWithoutWeekNestedInput
  }

  export type weekUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    choice?: choiceUncheckedUpdateManyWithoutWeekNestedInput
    game?: gameUncheckedUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type weekCreateManyInput = {
    id?: number
    name: string
    league_id: number
  }

  export type weekUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type weekUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type alembic_versionOrderByRelevanceInput = {
    fields: alembic_versionOrderByRelevanceFieldEnum | alembic_versionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type alembic_versionCountOrderByAggregateInput = {
    version_num?: SortOrder
  }

  export type alembic_versionMaxOrderByAggregateInput = {
    version_num?: SortOrder
  }

  export type alembic_versionMinOrderByAggregateInput = {
    version_num?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type badgeOrderByRelevanceInput = {
    fields: badgeOrderByRelevanceFieldEnum | badgeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type badgeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
  }

  export type badgeAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type badgeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
  }

  export type badgeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
  }

  export type badgeSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PlayerScalarRelationFilter = {
    is?: playerWhereInput
    isNot?: playerWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type WeekScalarRelationFilter = {
    is?: weekWhereInput
    isNot?: weekWhereInput
  }

  export type Player_choiceListRelationFilter = {
    every?: player_choiceWhereInput
    some?: player_choiceWhereInput
    none?: player_choiceWhereInput
  }

  export type player_choiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type choiceCountOrderByAggregateInput = {
    id?: SortOrder
    week_id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    points?: SortOrder
  }

  export type choiceAvgOrderByAggregateInput = {
    id?: SortOrder
    week_id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    points?: SortOrder
  }

  export type choiceMaxOrderByAggregateInput = {
    id?: SortOrder
    week_id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    points?: SortOrder
  }

  export type choiceMinOrderByAggregateInput = {
    id?: SortOrder
    week_id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    points?: SortOrder
  }

  export type choiceSumOrderByAggregateInput = {
    id?: SortOrder
    week_id?: SortOrder
    user_id?: SortOrder
    player_id?: SortOrder
    points?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type doctrine_migration_versionsOrderByRelevanceInput = {
    fields: doctrine_migration_versionsOrderByRelevanceFieldEnum | doctrine_migration_versionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type doctrine_migration_versionsCountOrderByAggregateInput = {
    version?: SortOrder
    executed_at?: SortOrder
    execution_time?: SortOrder
  }

  export type doctrine_migration_versionsAvgOrderByAggregateInput = {
    execution_time?: SortOrder
  }

  export type doctrine_migration_versionsMaxOrderByAggregateInput = {
    version?: SortOrder
    executed_at?: SortOrder
    execution_time?: SortOrder
  }

  export type doctrine_migration_versionsMinOrderByAggregateInput = {
    version?: SortOrder
    executed_at?: SortOrder
    execution_time?: SortOrder
  }

  export type doctrine_migration_versionsSumOrderByAggregateInput = {
    execution_time?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TeamNullableScalarRelationFilter = {
    is?: teamWhereInput | null
    isNot?: teamWhereInput | null
  }

  export type TeamScalarRelationFilter = {
    is?: teamWhereInput
    isNot?: teamWhereInput
  }

  export type gameTeam_home_idTeam_away_idWeek_idCompoundUniqueInput = {
    team_home_id: number
    team_away_id: number
    week_id: number
  }

  export type gameCountOrderByAggregateInput = {
    id?: SortOrder
    team_home_id?: SortOrder
    team_away_id?: SortOrder
    week_id?: SortOrder
  }

  export type gameAvgOrderByAggregateInput = {
    id?: SortOrder
    team_home_id?: SortOrder
    team_away_id?: SortOrder
    week_id?: SortOrder
  }

  export type gameMaxOrderByAggregateInput = {
    id?: SortOrder
    team_home_id?: SortOrder
    team_away_id?: SortOrder
    week_id?: SortOrder
  }

  export type gameMinOrderByAggregateInput = {
    id?: SortOrder
    team_home_id?: SortOrder
    team_away_id?: SortOrder
    week_id?: SortOrder
  }

  export type gameSumOrderByAggregateInput = {
    id?: SortOrder
    team_home_id?: SortOrder
    team_away_id?: SortOrder
    week_id?: SortOrder
  }

  export type TeamListRelationFilter = {
    every?: teamWhereInput
    some?: teamWhereInput
    none?: teamWhereInput
  }

  export type WeekListRelationFilter = {
    every?: weekWhereInput
    some?: weekWhereInput
    none?: weekWhereInput
  }

  export type teamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type weekOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leagueOrderByRelevanceInput = {
    fields: leagueOrderByRelevanceFieldEnum | leagueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type leagueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type leagueAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type leagueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type leagueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type leagueSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChoiceListRelationFilter = {
    every?: choiceWhereInput
    some?: choiceWhereInput
    none?: choiceWhereInput
  }

  export type Player_rateListRelationFilter = {
    every?: player_rateWhereInput
    some?: player_rateWhereInput
    none?: player_rateWhereInput
  }

  export type choiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type player_rateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playerOrderByRelevanceInput = {
    fields: playerOrderByRelevanceFieldEnum | playerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type playerCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    forename?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    selected?: SortOrder
  }

  export type playerAvgOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    rating?: SortOrder
  }

  export type playerMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    forename?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    selected?: SortOrder
  }

  export type playerMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    forename?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    selected?: SortOrder
  }

  export type playerSumOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChoiceScalarRelationFilter = {
    is?: choiceWhereInput
    isNot?: choiceWhereInput
  }

  export type player_choicePlayer_idChoice_idCompoundUniqueInput = {
    player_id: number
    choice_id: number
  }

  export type player_choiceCountOrderByAggregateInput = {
    player_id?: SortOrder
    choice_id?: SortOrder
  }

  export type player_choiceAvgOrderByAggregateInput = {
    player_id?: SortOrder
    choice_id?: SortOrder
  }

  export type player_choiceMaxOrderByAggregateInput = {
    player_id?: SortOrder
    choice_id?: SortOrder
  }

  export type player_choiceMinOrderByAggregateInput = {
    player_id?: SortOrder
    choice_id?: SortOrder
  }

  export type player_choiceSumOrderByAggregateInput = {
    player_id?: SortOrder
    choice_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type player_rateCountOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    week_id?: SortOrder
    rate?: SortOrder
  }

  export type player_rateAvgOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    week_id?: SortOrder
    rate?: SortOrder
  }

  export type player_rateMaxOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    week_id?: SortOrder
    rate?: SortOrder
  }

  export type player_rateMinOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    week_id?: SortOrder
    rate?: SortOrder
  }

  export type player_rateSumOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    week_id?: SortOrder
    rate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: gameWhereInput
    some?: gameWhereInput
    none?: gameWhereInput
  }

  export type PlayerListRelationFilter = {
    every?: playerWhereInput
    some?: playerWhereInput
    none?: playerWhereInput
  }

  export type LeagueScalarRelationFilter = {
    is?: leagueWhereInput
    isNot?: leagueWhereInput
  }

  export type gameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamOrderByRelevanceInput = {
    fields: teamOrderByRelevanceFieldEnum | teamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
  }

  export type teamAvgOrderByAggregateInput = {
    id?: SortOrder
    league_id?: SortOrder
  }

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
  }

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
  }

  export type teamSumOrderByAggregateInput = {
    id?: SortOrder
    league_id?: SortOrder
  }

  export type BadgeNullableScalarRelationFilter = {
    is?: badgeWhereInput | null
    isNot?: badgeWhereInput | null
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    roles?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    ptl_lfb?: SortOrder
    pt_lf2?: SortOrder
    reset_token?: SortOrder
    clerk_id?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    ptl_lfb?: SortOrder
    pt_lf2?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    roles?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    ptl_lfb?: SortOrder
    pt_lf2?: SortOrder
    reset_token?: SortOrder
    clerk_id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    roles?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    ptl_lfb?: SortOrder
    pt_lf2?: SortOrder
    reset_token?: SortOrder
    clerk_id?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    ptl_lfb?: SortOrder
    pt_lf2?: SortOrder
  }

  export type weekOrderByRelevanceInput = {
    fields: weekOrderByRelevanceFieldEnum | weekOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type weekCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
  }

  export type weekAvgOrderByAggregateInput = {
    id?: SortOrder
    league_id?: SortOrder
  }

  export type weekMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
  }

  export type weekMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league_id?: SortOrder
  }

  export type weekSumOrderByAggregateInput = {
    id?: SortOrder
    league_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type userCreateNestedOneWithoutBadgeInput = {
    create?: XOR<userCreateWithoutBadgeInput, userUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: userCreateOrConnectWithoutBadgeInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneWithoutBadgeNestedInput = {
    create?: XOR<userCreateWithoutBadgeInput, userUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: userCreateOrConnectWithoutBadgeInput
    upsert?: userUpsertWithoutBadgeInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBadgeInput, userUpdateWithoutBadgeInput>, userUncheckedUpdateWithoutBadgeInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type playerCreateNestedOneWithoutChoiceInput = {
    create?: XOR<playerCreateWithoutChoiceInput, playerUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: playerCreateOrConnectWithoutChoiceInput
    connect?: playerWhereUniqueInput
  }

  export type userCreateNestedOneWithoutChoiceInput = {
    create?: XOR<userCreateWithoutChoiceInput, userUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: userCreateOrConnectWithoutChoiceInput
    connect?: userWhereUniqueInput
  }

  export type weekCreateNestedOneWithoutChoiceInput = {
    create?: XOR<weekCreateWithoutChoiceInput, weekUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: weekCreateOrConnectWithoutChoiceInput
    connect?: weekWhereUniqueInput
  }

  export type player_choiceCreateNestedManyWithoutChoiceInput = {
    create?: XOR<player_choiceCreateWithoutChoiceInput, player_choiceUncheckedCreateWithoutChoiceInput> | player_choiceCreateWithoutChoiceInput[] | player_choiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutChoiceInput | player_choiceCreateOrConnectWithoutChoiceInput[]
    createMany?: player_choiceCreateManyChoiceInputEnvelope
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
  }

  export type player_choiceUncheckedCreateNestedManyWithoutChoiceInput = {
    create?: XOR<player_choiceCreateWithoutChoiceInput, player_choiceUncheckedCreateWithoutChoiceInput> | player_choiceCreateWithoutChoiceInput[] | player_choiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutChoiceInput | player_choiceCreateOrConnectWithoutChoiceInput[]
    createMany?: player_choiceCreateManyChoiceInputEnvelope
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type playerUpdateOneRequiredWithoutChoiceNestedInput = {
    create?: XOR<playerCreateWithoutChoiceInput, playerUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: playerCreateOrConnectWithoutChoiceInput
    upsert?: playerUpsertWithoutChoiceInput
    connect?: playerWhereUniqueInput
    update?: XOR<XOR<playerUpdateToOneWithWhereWithoutChoiceInput, playerUpdateWithoutChoiceInput>, playerUncheckedUpdateWithoutChoiceInput>
  }

  export type userUpdateOneRequiredWithoutChoiceNestedInput = {
    create?: XOR<userCreateWithoutChoiceInput, userUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: userCreateOrConnectWithoutChoiceInput
    upsert?: userUpsertWithoutChoiceInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChoiceInput, userUpdateWithoutChoiceInput>, userUncheckedUpdateWithoutChoiceInput>
  }

  export type weekUpdateOneRequiredWithoutChoiceNestedInput = {
    create?: XOR<weekCreateWithoutChoiceInput, weekUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: weekCreateOrConnectWithoutChoiceInput
    upsert?: weekUpsertWithoutChoiceInput
    connect?: weekWhereUniqueInput
    update?: XOR<XOR<weekUpdateToOneWithWhereWithoutChoiceInput, weekUpdateWithoutChoiceInput>, weekUncheckedUpdateWithoutChoiceInput>
  }

  export type player_choiceUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<player_choiceCreateWithoutChoiceInput, player_choiceUncheckedCreateWithoutChoiceInput> | player_choiceCreateWithoutChoiceInput[] | player_choiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutChoiceInput | player_choiceCreateOrConnectWithoutChoiceInput[]
    upsert?: player_choiceUpsertWithWhereUniqueWithoutChoiceInput | player_choiceUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: player_choiceCreateManyChoiceInputEnvelope
    set?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    disconnect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    delete?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    update?: player_choiceUpdateWithWhereUniqueWithoutChoiceInput | player_choiceUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: player_choiceUpdateManyWithWhereWithoutChoiceInput | player_choiceUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: player_choiceScalarWhereInput | player_choiceScalarWhereInput[]
  }

  export type player_choiceUncheckedUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<player_choiceCreateWithoutChoiceInput, player_choiceUncheckedCreateWithoutChoiceInput> | player_choiceCreateWithoutChoiceInput[] | player_choiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutChoiceInput | player_choiceCreateOrConnectWithoutChoiceInput[]
    upsert?: player_choiceUpsertWithWhereUniqueWithoutChoiceInput | player_choiceUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: player_choiceCreateManyChoiceInputEnvelope
    set?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    disconnect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    delete?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    update?: player_choiceUpdateWithWhereUniqueWithoutChoiceInput | player_choiceUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: player_choiceUpdateManyWithWhereWithoutChoiceInput | player_choiceUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: player_choiceScalarWhereInput | player_choiceScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type teamCreateNestedOneWithoutHome_gamesInput = {
    create?: XOR<teamCreateWithoutHome_gamesInput, teamUncheckedCreateWithoutHome_gamesInput>
    connectOrCreate?: teamCreateOrConnectWithoutHome_gamesInput
    connect?: teamWhereUniqueInput
  }

  export type teamCreateNestedOneWithoutAway_gamesInput = {
    create?: XOR<teamCreateWithoutAway_gamesInput, teamUncheckedCreateWithoutAway_gamesInput>
    connectOrCreate?: teamCreateOrConnectWithoutAway_gamesInput
    connect?: teamWhereUniqueInput
  }

  export type weekCreateNestedOneWithoutGameInput = {
    create?: XOR<weekCreateWithoutGameInput, weekUncheckedCreateWithoutGameInput>
    connectOrCreate?: weekCreateOrConnectWithoutGameInput
    connect?: weekWhereUniqueInput
  }

  export type teamUpdateOneWithoutHome_gamesNestedInput = {
    create?: XOR<teamCreateWithoutHome_gamesInput, teamUncheckedCreateWithoutHome_gamesInput>
    connectOrCreate?: teamCreateOrConnectWithoutHome_gamesInput
    upsert?: teamUpsertWithoutHome_gamesInput
    disconnect?: teamWhereInput | boolean
    delete?: teamWhereInput | boolean
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutHome_gamesInput, teamUpdateWithoutHome_gamesInput>, teamUncheckedUpdateWithoutHome_gamesInput>
  }

  export type teamUpdateOneRequiredWithoutAway_gamesNestedInput = {
    create?: XOR<teamCreateWithoutAway_gamesInput, teamUncheckedCreateWithoutAway_gamesInput>
    connectOrCreate?: teamCreateOrConnectWithoutAway_gamesInput
    upsert?: teamUpsertWithoutAway_gamesInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutAway_gamesInput, teamUpdateWithoutAway_gamesInput>, teamUncheckedUpdateWithoutAway_gamesInput>
  }

  export type weekUpdateOneRequiredWithoutGameNestedInput = {
    create?: XOR<weekCreateWithoutGameInput, weekUncheckedCreateWithoutGameInput>
    connectOrCreate?: weekCreateOrConnectWithoutGameInput
    upsert?: weekUpsertWithoutGameInput
    connect?: weekWhereUniqueInput
    update?: XOR<XOR<weekUpdateToOneWithWhereWithoutGameInput, weekUpdateWithoutGameInput>, weekUncheckedUpdateWithoutGameInput>
  }

  export type teamCreateNestedManyWithoutLeagueInput = {
    create?: XOR<teamCreateWithoutLeagueInput, teamUncheckedCreateWithoutLeagueInput> | teamCreateWithoutLeagueInput[] | teamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: teamCreateOrConnectWithoutLeagueInput | teamCreateOrConnectWithoutLeagueInput[]
    createMany?: teamCreateManyLeagueInputEnvelope
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
  }

  export type weekCreateNestedManyWithoutLeagueInput = {
    create?: XOR<weekCreateWithoutLeagueInput, weekUncheckedCreateWithoutLeagueInput> | weekCreateWithoutLeagueInput[] | weekUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: weekCreateOrConnectWithoutLeagueInput | weekCreateOrConnectWithoutLeagueInput[]
    createMany?: weekCreateManyLeagueInputEnvelope
    connect?: weekWhereUniqueInput | weekWhereUniqueInput[]
  }

  export type teamUncheckedCreateNestedManyWithoutLeagueInput = {
    create?: XOR<teamCreateWithoutLeagueInput, teamUncheckedCreateWithoutLeagueInput> | teamCreateWithoutLeagueInput[] | teamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: teamCreateOrConnectWithoutLeagueInput | teamCreateOrConnectWithoutLeagueInput[]
    createMany?: teamCreateManyLeagueInputEnvelope
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
  }

  export type weekUncheckedCreateNestedManyWithoutLeagueInput = {
    create?: XOR<weekCreateWithoutLeagueInput, weekUncheckedCreateWithoutLeagueInput> | weekCreateWithoutLeagueInput[] | weekUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: weekCreateOrConnectWithoutLeagueInput | weekCreateOrConnectWithoutLeagueInput[]
    createMany?: weekCreateManyLeagueInputEnvelope
    connect?: weekWhereUniqueInput | weekWhereUniqueInput[]
  }

  export type teamUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<teamCreateWithoutLeagueInput, teamUncheckedCreateWithoutLeagueInput> | teamCreateWithoutLeagueInput[] | teamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: teamCreateOrConnectWithoutLeagueInput | teamCreateOrConnectWithoutLeagueInput[]
    upsert?: teamUpsertWithWhereUniqueWithoutLeagueInput | teamUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: teamCreateManyLeagueInputEnvelope
    set?: teamWhereUniqueInput | teamWhereUniqueInput[]
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[]
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    update?: teamUpdateWithWhereUniqueWithoutLeagueInput | teamUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: teamUpdateManyWithWhereWithoutLeagueInput | teamUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[]
  }

  export type weekUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<weekCreateWithoutLeagueInput, weekUncheckedCreateWithoutLeagueInput> | weekCreateWithoutLeagueInput[] | weekUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: weekCreateOrConnectWithoutLeagueInput | weekCreateOrConnectWithoutLeagueInput[]
    upsert?: weekUpsertWithWhereUniqueWithoutLeagueInput | weekUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: weekCreateManyLeagueInputEnvelope
    set?: weekWhereUniqueInput | weekWhereUniqueInput[]
    disconnect?: weekWhereUniqueInput | weekWhereUniqueInput[]
    delete?: weekWhereUniqueInput | weekWhereUniqueInput[]
    connect?: weekWhereUniqueInput | weekWhereUniqueInput[]
    update?: weekUpdateWithWhereUniqueWithoutLeagueInput | weekUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: weekUpdateManyWithWhereWithoutLeagueInput | weekUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: weekScalarWhereInput | weekScalarWhereInput[]
  }

  export type teamUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<teamCreateWithoutLeagueInput, teamUncheckedCreateWithoutLeagueInput> | teamCreateWithoutLeagueInput[] | teamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: teamCreateOrConnectWithoutLeagueInput | teamCreateOrConnectWithoutLeagueInput[]
    upsert?: teamUpsertWithWhereUniqueWithoutLeagueInput | teamUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: teamCreateManyLeagueInputEnvelope
    set?: teamWhereUniqueInput | teamWhereUniqueInput[]
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[]
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    update?: teamUpdateWithWhereUniqueWithoutLeagueInput | teamUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: teamUpdateManyWithWhereWithoutLeagueInput | teamUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[]
  }

  export type weekUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<weekCreateWithoutLeagueInput, weekUncheckedCreateWithoutLeagueInput> | weekCreateWithoutLeagueInput[] | weekUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: weekCreateOrConnectWithoutLeagueInput | weekCreateOrConnectWithoutLeagueInput[]
    upsert?: weekUpsertWithWhereUniqueWithoutLeagueInput | weekUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: weekCreateManyLeagueInputEnvelope
    set?: weekWhereUniqueInput | weekWhereUniqueInput[]
    disconnect?: weekWhereUniqueInput | weekWhereUniqueInput[]
    delete?: weekWhereUniqueInput | weekWhereUniqueInput[]
    connect?: weekWhereUniqueInput | weekWhereUniqueInput[]
    update?: weekUpdateWithWhereUniqueWithoutLeagueInput | weekUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: weekUpdateManyWithWhereWithoutLeagueInput | weekUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: weekScalarWhereInput | weekScalarWhereInput[]
  }

  export type choiceCreateNestedManyWithoutPlayerInput = {
    create?: XOR<choiceCreateWithoutPlayerInput, choiceUncheckedCreateWithoutPlayerInput> | choiceCreateWithoutPlayerInput[] | choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutPlayerInput | choiceCreateOrConnectWithoutPlayerInput[]
    createMany?: choiceCreateManyPlayerInputEnvelope
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
  }

  export type teamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: teamCreateOrConnectWithoutPlayersInput
    connect?: teamWhereUniqueInput
  }

  export type player_choiceCreateNestedManyWithoutPlayerInput = {
    create?: XOR<player_choiceCreateWithoutPlayerInput, player_choiceUncheckedCreateWithoutPlayerInput> | player_choiceCreateWithoutPlayerInput[] | player_choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutPlayerInput | player_choiceCreateOrConnectWithoutPlayerInput[]
    createMany?: player_choiceCreateManyPlayerInputEnvelope
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
  }

  export type player_rateCreateNestedManyWithoutPlayerInput = {
    create?: XOR<player_rateCreateWithoutPlayerInput, player_rateUncheckedCreateWithoutPlayerInput> | player_rateCreateWithoutPlayerInput[] | player_rateUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutPlayerInput | player_rateCreateOrConnectWithoutPlayerInput[]
    createMany?: player_rateCreateManyPlayerInputEnvelope
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
  }

  export type choiceUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<choiceCreateWithoutPlayerInput, choiceUncheckedCreateWithoutPlayerInput> | choiceCreateWithoutPlayerInput[] | choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutPlayerInput | choiceCreateOrConnectWithoutPlayerInput[]
    createMany?: choiceCreateManyPlayerInputEnvelope
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
  }

  export type player_choiceUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<player_choiceCreateWithoutPlayerInput, player_choiceUncheckedCreateWithoutPlayerInput> | player_choiceCreateWithoutPlayerInput[] | player_choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutPlayerInput | player_choiceCreateOrConnectWithoutPlayerInput[]
    createMany?: player_choiceCreateManyPlayerInputEnvelope
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
  }

  export type player_rateUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<player_rateCreateWithoutPlayerInput, player_rateUncheckedCreateWithoutPlayerInput> | player_rateCreateWithoutPlayerInput[] | player_rateUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutPlayerInput | player_rateCreateOrConnectWithoutPlayerInput[]
    createMany?: player_rateCreateManyPlayerInputEnvelope
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type choiceUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<choiceCreateWithoutPlayerInput, choiceUncheckedCreateWithoutPlayerInput> | choiceCreateWithoutPlayerInput[] | choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutPlayerInput | choiceCreateOrConnectWithoutPlayerInput[]
    upsert?: choiceUpsertWithWhereUniqueWithoutPlayerInput | choiceUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: choiceCreateManyPlayerInputEnvelope
    set?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    disconnect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    delete?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    update?: choiceUpdateWithWhereUniqueWithoutPlayerInput | choiceUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: choiceUpdateManyWithWhereWithoutPlayerInput | choiceUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: choiceScalarWhereInput | choiceScalarWhereInput[]
  }

  export type teamUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: teamCreateOrConnectWithoutPlayersInput
    upsert?: teamUpsertWithoutPlayersInput
    disconnect?: teamWhereInput | boolean
    delete?: teamWhereInput | boolean
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutPlayersInput, teamUpdateWithoutPlayersInput>, teamUncheckedUpdateWithoutPlayersInput>
  }

  export type player_choiceUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<player_choiceCreateWithoutPlayerInput, player_choiceUncheckedCreateWithoutPlayerInput> | player_choiceCreateWithoutPlayerInput[] | player_choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutPlayerInput | player_choiceCreateOrConnectWithoutPlayerInput[]
    upsert?: player_choiceUpsertWithWhereUniqueWithoutPlayerInput | player_choiceUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: player_choiceCreateManyPlayerInputEnvelope
    set?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    disconnect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    delete?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    update?: player_choiceUpdateWithWhereUniqueWithoutPlayerInput | player_choiceUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: player_choiceUpdateManyWithWhereWithoutPlayerInput | player_choiceUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: player_choiceScalarWhereInput | player_choiceScalarWhereInput[]
  }

  export type player_rateUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<player_rateCreateWithoutPlayerInput, player_rateUncheckedCreateWithoutPlayerInput> | player_rateCreateWithoutPlayerInput[] | player_rateUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutPlayerInput | player_rateCreateOrConnectWithoutPlayerInput[]
    upsert?: player_rateUpsertWithWhereUniqueWithoutPlayerInput | player_rateUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: player_rateCreateManyPlayerInputEnvelope
    set?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    disconnect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    delete?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    update?: player_rateUpdateWithWhereUniqueWithoutPlayerInput | player_rateUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: player_rateUpdateManyWithWhereWithoutPlayerInput | player_rateUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: player_rateScalarWhereInput | player_rateScalarWhereInput[]
  }

  export type choiceUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<choiceCreateWithoutPlayerInput, choiceUncheckedCreateWithoutPlayerInput> | choiceCreateWithoutPlayerInput[] | choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutPlayerInput | choiceCreateOrConnectWithoutPlayerInput[]
    upsert?: choiceUpsertWithWhereUniqueWithoutPlayerInput | choiceUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: choiceCreateManyPlayerInputEnvelope
    set?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    disconnect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    delete?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    update?: choiceUpdateWithWhereUniqueWithoutPlayerInput | choiceUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: choiceUpdateManyWithWhereWithoutPlayerInput | choiceUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: choiceScalarWhereInput | choiceScalarWhereInput[]
  }

  export type player_choiceUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<player_choiceCreateWithoutPlayerInput, player_choiceUncheckedCreateWithoutPlayerInput> | player_choiceCreateWithoutPlayerInput[] | player_choiceUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_choiceCreateOrConnectWithoutPlayerInput | player_choiceCreateOrConnectWithoutPlayerInput[]
    upsert?: player_choiceUpsertWithWhereUniqueWithoutPlayerInput | player_choiceUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: player_choiceCreateManyPlayerInputEnvelope
    set?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    disconnect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    delete?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    connect?: player_choiceWhereUniqueInput | player_choiceWhereUniqueInput[]
    update?: player_choiceUpdateWithWhereUniqueWithoutPlayerInput | player_choiceUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: player_choiceUpdateManyWithWhereWithoutPlayerInput | player_choiceUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: player_choiceScalarWhereInput | player_choiceScalarWhereInput[]
  }

  export type player_rateUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<player_rateCreateWithoutPlayerInput, player_rateUncheckedCreateWithoutPlayerInput> | player_rateCreateWithoutPlayerInput[] | player_rateUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutPlayerInput | player_rateCreateOrConnectWithoutPlayerInput[]
    upsert?: player_rateUpsertWithWhereUniqueWithoutPlayerInput | player_rateUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: player_rateCreateManyPlayerInputEnvelope
    set?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    disconnect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    delete?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    update?: player_rateUpdateWithWhereUniqueWithoutPlayerInput | player_rateUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: player_rateUpdateManyWithWhereWithoutPlayerInput | player_rateUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: player_rateScalarWhereInput | player_rateScalarWhereInput[]
  }

  export type choiceCreateNestedOneWithoutPlayer_choiceInput = {
    create?: XOR<choiceCreateWithoutPlayer_choiceInput, choiceUncheckedCreateWithoutPlayer_choiceInput>
    connectOrCreate?: choiceCreateOrConnectWithoutPlayer_choiceInput
    connect?: choiceWhereUniqueInput
  }

  export type playerCreateNestedOneWithoutPlayer_choiceInput = {
    create?: XOR<playerCreateWithoutPlayer_choiceInput, playerUncheckedCreateWithoutPlayer_choiceInput>
    connectOrCreate?: playerCreateOrConnectWithoutPlayer_choiceInput
    connect?: playerWhereUniqueInput
  }

  export type choiceUpdateOneRequiredWithoutPlayer_choiceNestedInput = {
    create?: XOR<choiceCreateWithoutPlayer_choiceInput, choiceUncheckedCreateWithoutPlayer_choiceInput>
    connectOrCreate?: choiceCreateOrConnectWithoutPlayer_choiceInput
    upsert?: choiceUpsertWithoutPlayer_choiceInput
    connect?: choiceWhereUniqueInput
    update?: XOR<XOR<choiceUpdateToOneWithWhereWithoutPlayer_choiceInput, choiceUpdateWithoutPlayer_choiceInput>, choiceUncheckedUpdateWithoutPlayer_choiceInput>
  }

  export type playerUpdateOneRequiredWithoutPlayer_choiceNestedInput = {
    create?: XOR<playerCreateWithoutPlayer_choiceInput, playerUncheckedCreateWithoutPlayer_choiceInput>
    connectOrCreate?: playerCreateOrConnectWithoutPlayer_choiceInput
    upsert?: playerUpsertWithoutPlayer_choiceInput
    connect?: playerWhereUniqueInput
    update?: XOR<XOR<playerUpdateToOneWithWhereWithoutPlayer_choiceInput, playerUpdateWithoutPlayer_choiceInput>, playerUncheckedUpdateWithoutPlayer_choiceInput>
  }

  export type playerCreateNestedOneWithoutPlayer_rateInput = {
    create?: XOR<playerCreateWithoutPlayer_rateInput, playerUncheckedCreateWithoutPlayer_rateInput>
    connectOrCreate?: playerCreateOrConnectWithoutPlayer_rateInput
    connect?: playerWhereUniqueInput
  }

  export type weekCreateNestedOneWithoutPlayer_rateInput = {
    create?: XOR<weekCreateWithoutPlayer_rateInput, weekUncheckedCreateWithoutPlayer_rateInput>
    connectOrCreate?: weekCreateOrConnectWithoutPlayer_rateInput
    connect?: weekWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type playerUpdateOneRequiredWithoutPlayer_rateNestedInput = {
    create?: XOR<playerCreateWithoutPlayer_rateInput, playerUncheckedCreateWithoutPlayer_rateInput>
    connectOrCreate?: playerCreateOrConnectWithoutPlayer_rateInput
    upsert?: playerUpsertWithoutPlayer_rateInput
    connect?: playerWhereUniqueInput
    update?: XOR<XOR<playerUpdateToOneWithWhereWithoutPlayer_rateInput, playerUpdateWithoutPlayer_rateInput>, playerUncheckedUpdateWithoutPlayer_rateInput>
  }

  export type weekUpdateOneRequiredWithoutPlayer_rateNestedInput = {
    create?: XOR<weekCreateWithoutPlayer_rateInput, weekUncheckedCreateWithoutPlayer_rateInput>
    connectOrCreate?: weekCreateOrConnectWithoutPlayer_rateInput
    upsert?: weekUpsertWithoutPlayer_rateInput
    connect?: weekWhereUniqueInput
    update?: XOR<XOR<weekUpdateToOneWithWhereWithoutPlayer_rateInput, weekUpdateWithoutPlayer_rateInput>, weekUncheckedUpdateWithoutPlayer_rateInput>
  }

  export type gameCreateNestedManyWithoutTeam_homeInput = {
    create?: XOR<gameCreateWithoutTeam_homeInput, gameUncheckedCreateWithoutTeam_homeInput> | gameCreateWithoutTeam_homeInput[] | gameUncheckedCreateWithoutTeam_homeInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_homeInput | gameCreateOrConnectWithoutTeam_homeInput[]
    createMany?: gameCreateManyTeam_homeInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type gameCreateNestedManyWithoutTeam_awayInput = {
    create?: XOR<gameCreateWithoutTeam_awayInput, gameUncheckedCreateWithoutTeam_awayInput> | gameCreateWithoutTeam_awayInput[] | gameUncheckedCreateWithoutTeam_awayInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_awayInput | gameCreateOrConnectWithoutTeam_awayInput[]
    createMany?: gameCreateManyTeam_awayInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type playerCreateNestedManyWithoutTeamInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
  }

  export type leagueCreateNestedOneWithoutTeamInput = {
    create?: XOR<leagueCreateWithoutTeamInput, leagueUncheckedCreateWithoutTeamInput>
    connectOrCreate?: leagueCreateOrConnectWithoutTeamInput
    connect?: leagueWhereUniqueInput
  }

  export type gameUncheckedCreateNestedManyWithoutTeam_homeInput = {
    create?: XOR<gameCreateWithoutTeam_homeInput, gameUncheckedCreateWithoutTeam_homeInput> | gameCreateWithoutTeam_homeInput[] | gameUncheckedCreateWithoutTeam_homeInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_homeInput | gameCreateOrConnectWithoutTeam_homeInput[]
    createMany?: gameCreateManyTeam_homeInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type gameUncheckedCreateNestedManyWithoutTeam_awayInput = {
    create?: XOR<gameCreateWithoutTeam_awayInput, gameUncheckedCreateWithoutTeam_awayInput> | gameCreateWithoutTeam_awayInput[] | gameUncheckedCreateWithoutTeam_awayInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_awayInput | gameCreateOrConnectWithoutTeam_awayInput[]
    createMany?: gameCreateManyTeam_awayInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type playerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
  }

  export type gameUpdateManyWithoutTeam_homeNestedInput = {
    create?: XOR<gameCreateWithoutTeam_homeInput, gameUncheckedCreateWithoutTeam_homeInput> | gameCreateWithoutTeam_homeInput[] | gameUncheckedCreateWithoutTeam_homeInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_homeInput | gameCreateOrConnectWithoutTeam_homeInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutTeam_homeInput | gameUpsertWithWhereUniqueWithoutTeam_homeInput[]
    createMany?: gameCreateManyTeam_homeInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutTeam_homeInput | gameUpdateWithWhereUniqueWithoutTeam_homeInput[]
    updateMany?: gameUpdateManyWithWhereWithoutTeam_homeInput | gameUpdateManyWithWhereWithoutTeam_homeInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type gameUpdateManyWithoutTeam_awayNestedInput = {
    create?: XOR<gameCreateWithoutTeam_awayInput, gameUncheckedCreateWithoutTeam_awayInput> | gameCreateWithoutTeam_awayInput[] | gameUncheckedCreateWithoutTeam_awayInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_awayInput | gameCreateOrConnectWithoutTeam_awayInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutTeam_awayInput | gameUpsertWithWhereUniqueWithoutTeam_awayInput[]
    createMany?: gameCreateManyTeam_awayInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutTeam_awayInput | gameUpdateWithWhereUniqueWithoutTeam_awayInput[]
    updateMany?: gameUpdateManyWithWhereWithoutTeam_awayInput | gameUpdateManyWithWhereWithoutTeam_awayInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type playerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    upsert?: playerUpsertWithWhereUniqueWithoutTeamInput | playerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    set?: playerWhereUniqueInput | playerWhereUniqueInput[]
    disconnect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    delete?: playerWhereUniqueInput | playerWhereUniqueInput[]
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    update?: playerUpdateWithWhereUniqueWithoutTeamInput | playerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: playerUpdateManyWithWhereWithoutTeamInput | playerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: playerScalarWhereInput | playerScalarWhereInput[]
  }

  export type leagueUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<leagueCreateWithoutTeamInput, leagueUncheckedCreateWithoutTeamInput>
    connectOrCreate?: leagueCreateOrConnectWithoutTeamInput
    upsert?: leagueUpsertWithoutTeamInput
    connect?: leagueWhereUniqueInput
    update?: XOR<XOR<leagueUpdateToOneWithWhereWithoutTeamInput, leagueUpdateWithoutTeamInput>, leagueUncheckedUpdateWithoutTeamInput>
  }

  export type gameUncheckedUpdateManyWithoutTeam_homeNestedInput = {
    create?: XOR<gameCreateWithoutTeam_homeInput, gameUncheckedCreateWithoutTeam_homeInput> | gameCreateWithoutTeam_homeInput[] | gameUncheckedCreateWithoutTeam_homeInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_homeInput | gameCreateOrConnectWithoutTeam_homeInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutTeam_homeInput | gameUpsertWithWhereUniqueWithoutTeam_homeInput[]
    createMany?: gameCreateManyTeam_homeInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutTeam_homeInput | gameUpdateWithWhereUniqueWithoutTeam_homeInput[]
    updateMany?: gameUpdateManyWithWhereWithoutTeam_homeInput | gameUpdateManyWithWhereWithoutTeam_homeInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type gameUncheckedUpdateManyWithoutTeam_awayNestedInput = {
    create?: XOR<gameCreateWithoutTeam_awayInput, gameUncheckedCreateWithoutTeam_awayInput> | gameCreateWithoutTeam_awayInput[] | gameUncheckedCreateWithoutTeam_awayInput[]
    connectOrCreate?: gameCreateOrConnectWithoutTeam_awayInput | gameCreateOrConnectWithoutTeam_awayInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutTeam_awayInput | gameUpsertWithWhereUniqueWithoutTeam_awayInput[]
    createMany?: gameCreateManyTeam_awayInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutTeam_awayInput | gameUpdateWithWhereUniqueWithoutTeam_awayInput[]
    updateMany?: gameUpdateManyWithWhereWithoutTeam_awayInput | gameUpdateManyWithWhereWithoutTeam_awayInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type playerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    upsert?: playerUpsertWithWhereUniqueWithoutTeamInput | playerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    set?: playerWhereUniqueInput | playerWhereUniqueInput[]
    disconnect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    delete?: playerWhereUniqueInput | playerWhereUniqueInput[]
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    update?: playerUpdateWithWhereUniqueWithoutTeamInput | playerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: playerUpdateManyWithWhereWithoutTeamInput | playerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: playerScalarWhereInput | playerScalarWhereInput[]
  }

  export type badgeCreateNestedOneWithoutUserInput = {
    create?: XOR<badgeCreateWithoutUserInput, badgeUncheckedCreateWithoutUserInput>
    connectOrCreate?: badgeCreateOrConnectWithoutUserInput
    connect?: badgeWhereUniqueInput
  }

  export type choiceCreateNestedManyWithoutUserInput = {
    create?: XOR<choiceCreateWithoutUserInput, choiceUncheckedCreateWithoutUserInput> | choiceCreateWithoutUserInput[] | choiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutUserInput | choiceCreateOrConnectWithoutUserInput[]
    createMany?: choiceCreateManyUserInputEnvelope
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
  }

  export type badgeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<badgeCreateWithoutUserInput, badgeUncheckedCreateWithoutUserInput>
    connectOrCreate?: badgeCreateOrConnectWithoutUserInput
    connect?: badgeWhereUniqueInput
  }

  export type choiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<choiceCreateWithoutUserInput, choiceUncheckedCreateWithoutUserInput> | choiceCreateWithoutUserInput[] | choiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutUserInput | choiceCreateOrConnectWithoutUserInput[]
    createMany?: choiceCreateManyUserInputEnvelope
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
  }

  export type badgeUpdateOneWithoutUserNestedInput = {
    create?: XOR<badgeCreateWithoutUserInput, badgeUncheckedCreateWithoutUserInput>
    connectOrCreate?: badgeCreateOrConnectWithoutUserInput
    upsert?: badgeUpsertWithoutUserInput
    disconnect?: badgeWhereInput | boolean
    delete?: badgeWhereInput | boolean
    connect?: badgeWhereUniqueInput
    update?: XOR<XOR<badgeUpdateToOneWithWhereWithoutUserInput, badgeUpdateWithoutUserInput>, badgeUncheckedUpdateWithoutUserInput>
  }

  export type choiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<choiceCreateWithoutUserInput, choiceUncheckedCreateWithoutUserInput> | choiceCreateWithoutUserInput[] | choiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutUserInput | choiceCreateOrConnectWithoutUserInput[]
    upsert?: choiceUpsertWithWhereUniqueWithoutUserInput | choiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: choiceCreateManyUserInputEnvelope
    set?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    disconnect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    delete?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    update?: choiceUpdateWithWhereUniqueWithoutUserInput | choiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: choiceUpdateManyWithWhereWithoutUserInput | choiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: choiceScalarWhereInput | choiceScalarWhereInput[]
  }

  export type badgeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<badgeCreateWithoutUserInput, badgeUncheckedCreateWithoutUserInput>
    connectOrCreate?: badgeCreateOrConnectWithoutUserInput
    upsert?: badgeUpsertWithoutUserInput
    disconnect?: badgeWhereInput | boolean
    delete?: badgeWhereInput | boolean
    connect?: badgeWhereUniqueInput
    update?: XOR<XOR<badgeUpdateToOneWithWhereWithoutUserInput, badgeUpdateWithoutUserInput>, badgeUncheckedUpdateWithoutUserInput>
  }

  export type choiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<choiceCreateWithoutUserInput, choiceUncheckedCreateWithoutUserInput> | choiceCreateWithoutUserInput[] | choiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutUserInput | choiceCreateOrConnectWithoutUserInput[]
    upsert?: choiceUpsertWithWhereUniqueWithoutUserInput | choiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: choiceCreateManyUserInputEnvelope
    set?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    disconnect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    delete?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    update?: choiceUpdateWithWhereUniqueWithoutUserInput | choiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: choiceUpdateManyWithWhereWithoutUserInput | choiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: choiceScalarWhereInput | choiceScalarWhereInput[]
  }

  export type choiceCreateNestedManyWithoutWeekInput = {
    create?: XOR<choiceCreateWithoutWeekInput, choiceUncheckedCreateWithoutWeekInput> | choiceCreateWithoutWeekInput[] | choiceUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutWeekInput | choiceCreateOrConnectWithoutWeekInput[]
    createMany?: choiceCreateManyWeekInputEnvelope
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
  }

  export type gameCreateNestedManyWithoutWeekInput = {
    create?: XOR<gameCreateWithoutWeekInput, gameUncheckedCreateWithoutWeekInput> | gameCreateWithoutWeekInput[] | gameUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: gameCreateOrConnectWithoutWeekInput | gameCreateOrConnectWithoutWeekInput[]
    createMany?: gameCreateManyWeekInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type player_rateCreateNestedManyWithoutWeekInput = {
    create?: XOR<player_rateCreateWithoutWeekInput, player_rateUncheckedCreateWithoutWeekInput> | player_rateCreateWithoutWeekInput[] | player_rateUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutWeekInput | player_rateCreateOrConnectWithoutWeekInput[]
    createMany?: player_rateCreateManyWeekInputEnvelope
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
  }

  export type leagueCreateNestedOneWithoutWeekInput = {
    create?: XOR<leagueCreateWithoutWeekInput, leagueUncheckedCreateWithoutWeekInput>
    connectOrCreate?: leagueCreateOrConnectWithoutWeekInput
    connect?: leagueWhereUniqueInput
  }

  export type choiceUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<choiceCreateWithoutWeekInput, choiceUncheckedCreateWithoutWeekInput> | choiceCreateWithoutWeekInput[] | choiceUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutWeekInput | choiceCreateOrConnectWithoutWeekInput[]
    createMany?: choiceCreateManyWeekInputEnvelope
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
  }

  export type gameUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<gameCreateWithoutWeekInput, gameUncheckedCreateWithoutWeekInput> | gameCreateWithoutWeekInput[] | gameUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: gameCreateOrConnectWithoutWeekInput | gameCreateOrConnectWithoutWeekInput[]
    createMany?: gameCreateManyWeekInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type player_rateUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<player_rateCreateWithoutWeekInput, player_rateUncheckedCreateWithoutWeekInput> | player_rateCreateWithoutWeekInput[] | player_rateUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutWeekInput | player_rateCreateOrConnectWithoutWeekInput[]
    createMany?: player_rateCreateManyWeekInputEnvelope
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
  }

  export type choiceUpdateManyWithoutWeekNestedInput = {
    create?: XOR<choiceCreateWithoutWeekInput, choiceUncheckedCreateWithoutWeekInput> | choiceCreateWithoutWeekInput[] | choiceUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutWeekInput | choiceCreateOrConnectWithoutWeekInput[]
    upsert?: choiceUpsertWithWhereUniqueWithoutWeekInput | choiceUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: choiceCreateManyWeekInputEnvelope
    set?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    disconnect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    delete?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    update?: choiceUpdateWithWhereUniqueWithoutWeekInput | choiceUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: choiceUpdateManyWithWhereWithoutWeekInput | choiceUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: choiceScalarWhereInput | choiceScalarWhereInput[]
  }

  export type gameUpdateManyWithoutWeekNestedInput = {
    create?: XOR<gameCreateWithoutWeekInput, gameUncheckedCreateWithoutWeekInput> | gameCreateWithoutWeekInput[] | gameUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: gameCreateOrConnectWithoutWeekInput | gameCreateOrConnectWithoutWeekInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutWeekInput | gameUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: gameCreateManyWeekInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutWeekInput | gameUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: gameUpdateManyWithWhereWithoutWeekInput | gameUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type player_rateUpdateManyWithoutWeekNestedInput = {
    create?: XOR<player_rateCreateWithoutWeekInput, player_rateUncheckedCreateWithoutWeekInput> | player_rateCreateWithoutWeekInput[] | player_rateUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutWeekInput | player_rateCreateOrConnectWithoutWeekInput[]
    upsert?: player_rateUpsertWithWhereUniqueWithoutWeekInput | player_rateUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: player_rateCreateManyWeekInputEnvelope
    set?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    disconnect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    delete?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    update?: player_rateUpdateWithWhereUniqueWithoutWeekInput | player_rateUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: player_rateUpdateManyWithWhereWithoutWeekInput | player_rateUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: player_rateScalarWhereInput | player_rateScalarWhereInput[]
  }

  export type leagueUpdateOneRequiredWithoutWeekNestedInput = {
    create?: XOR<leagueCreateWithoutWeekInput, leagueUncheckedCreateWithoutWeekInput>
    connectOrCreate?: leagueCreateOrConnectWithoutWeekInput
    upsert?: leagueUpsertWithoutWeekInput
    connect?: leagueWhereUniqueInput
    update?: XOR<XOR<leagueUpdateToOneWithWhereWithoutWeekInput, leagueUpdateWithoutWeekInput>, leagueUncheckedUpdateWithoutWeekInput>
  }

  export type choiceUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: XOR<choiceCreateWithoutWeekInput, choiceUncheckedCreateWithoutWeekInput> | choiceCreateWithoutWeekInput[] | choiceUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: choiceCreateOrConnectWithoutWeekInput | choiceCreateOrConnectWithoutWeekInput[]
    upsert?: choiceUpsertWithWhereUniqueWithoutWeekInput | choiceUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: choiceCreateManyWeekInputEnvelope
    set?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    disconnect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    delete?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    connect?: choiceWhereUniqueInput | choiceWhereUniqueInput[]
    update?: choiceUpdateWithWhereUniqueWithoutWeekInput | choiceUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: choiceUpdateManyWithWhereWithoutWeekInput | choiceUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: choiceScalarWhereInput | choiceScalarWhereInput[]
  }

  export type gameUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: XOR<gameCreateWithoutWeekInput, gameUncheckedCreateWithoutWeekInput> | gameCreateWithoutWeekInput[] | gameUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: gameCreateOrConnectWithoutWeekInput | gameCreateOrConnectWithoutWeekInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutWeekInput | gameUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: gameCreateManyWeekInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutWeekInput | gameUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: gameUpdateManyWithWhereWithoutWeekInput | gameUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type player_rateUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: XOR<player_rateCreateWithoutWeekInput, player_rateUncheckedCreateWithoutWeekInput> | player_rateCreateWithoutWeekInput[] | player_rateUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: player_rateCreateOrConnectWithoutWeekInput | player_rateCreateOrConnectWithoutWeekInput[]
    upsert?: player_rateUpsertWithWhereUniqueWithoutWeekInput | player_rateUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: player_rateCreateManyWeekInputEnvelope
    set?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    disconnect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    delete?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    connect?: player_rateWhereUniqueInput | player_rateWhereUniqueInput[]
    update?: player_rateUpdateWithWhereUniqueWithoutWeekInput | player_rateUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: player_rateUpdateManyWithWhereWithoutWeekInput | player_rateUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: player_rateScalarWhereInput | player_rateScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type userCreateWithoutBadgeInput = {
    email: string
    roles: string
    password: string
    pseudo?: string | null
    ptl_lfb?: number
    pt_lf2?: number
    reset_token?: string | null
    clerk_id: string
    choice?: choiceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutBadgeInput = {
    id?: number
    email: string
    roles: string
    password: string
    pseudo?: string | null
    ptl_lfb?: number
    pt_lf2?: number
    reset_token?: string | null
    clerk_id: string
    choice?: choiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutBadgeInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBadgeInput, userUncheckedCreateWithoutBadgeInput>
  }

  export type userUpsertWithoutBadgeInput = {
    update: XOR<userUpdateWithoutBadgeInput, userUncheckedUpdateWithoutBadgeInput>
    create: XOR<userCreateWithoutBadgeInput, userUncheckedCreateWithoutBadgeInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBadgeInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBadgeInput, userUncheckedUpdateWithoutBadgeInput>
  }

  export type userUpdateWithoutBadgeInput = {
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
    choice?: choiceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
    choice?: choiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type playerCreateWithoutChoiceInput = {
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    team?: teamCreateNestedOneWithoutPlayersInput
    player_choice?: player_choiceCreateNestedManyWithoutPlayerInput
    player_rate?: player_rateCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutChoiceInput = {
    id?: number
    team_id?: number | null
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutPlayerInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerCreateOrConnectWithoutChoiceInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutChoiceInput, playerUncheckedCreateWithoutChoiceInput>
  }

  export type userCreateWithoutChoiceInput = {
    email: string
    roles: string
    password: string
    pseudo?: string | null
    ptl_lfb?: number
    pt_lf2?: number
    reset_token?: string | null
    clerk_id: string
    badge?: badgeCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutChoiceInput = {
    id?: number
    email: string
    roles: string
    password: string
    pseudo?: string | null
    ptl_lfb?: number
    pt_lf2?: number
    reset_token?: string | null
    clerk_id: string
    badge?: badgeUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutChoiceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChoiceInput, userUncheckedCreateWithoutChoiceInput>
  }

  export type weekCreateWithoutChoiceInput = {
    name: string
    game?: gameCreateNestedManyWithoutWeekInput
    player_rate?: player_rateCreateNestedManyWithoutWeekInput
    league: leagueCreateNestedOneWithoutWeekInput
  }

  export type weekUncheckedCreateWithoutChoiceInput = {
    id?: number
    name: string
    league_id: number
    game?: gameUncheckedCreateNestedManyWithoutWeekInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutWeekInput
  }

  export type weekCreateOrConnectWithoutChoiceInput = {
    where: weekWhereUniqueInput
    create: XOR<weekCreateWithoutChoiceInput, weekUncheckedCreateWithoutChoiceInput>
  }

  export type player_choiceCreateWithoutChoiceInput = {
    player: playerCreateNestedOneWithoutPlayer_choiceInput
  }

  export type player_choiceUncheckedCreateWithoutChoiceInput = {
    player_id: number
  }

  export type player_choiceCreateOrConnectWithoutChoiceInput = {
    where: player_choiceWhereUniqueInput
    create: XOR<player_choiceCreateWithoutChoiceInput, player_choiceUncheckedCreateWithoutChoiceInput>
  }

  export type player_choiceCreateManyChoiceInputEnvelope = {
    data: player_choiceCreateManyChoiceInput | player_choiceCreateManyChoiceInput[]
    skipDuplicates?: boolean
  }

  export type playerUpsertWithoutChoiceInput = {
    update: XOR<playerUpdateWithoutChoiceInput, playerUncheckedUpdateWithoutChoiceInput>
    create: XOR<playerCreateWithoutChoiceInput, playerUncheckedCreateWithoutChoiceInput>
    where?: playerWhereInput
  }

  export type playerUpdateToOneWithWhereWithoutChoiceInput = {
    where?: playerWhereInput
    data: XOR<playerUpdateWithoutChoiceInput, playerUncheckedUpdateWithoutChoiceInput>
  }

  export type playerUpdateWithoutChoiceInput = {
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    team?: teamUpdateOneWithoutPlayersNestedInput
    player_choice?: player_choiceUpdateManyWithoutPlayerNestedInput
    player_rate?: player_rateUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    player_choice?: player_choiceUncheckedUpdateManyWithoutPlayerNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type userUpsertWithoutChoiceInput = {
    update: XOR<userUpdateWithoutChoiceInput, userUncheckedUpdateWithoutChoiceInput>
    create: XOR<userCreateWithoutChoiceInput, userUncheckedCreateWithoutChoiceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChoiceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChoiceInput, userUncheckedUpdateWithoutChoiceInput>
  }

  export type userUpdateWithoutChoiceInput = {
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
    badge?: badgeUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    ptl_lfb?: FloatFieldUpdateOperationsInput | number
    pt_lf2?: FloatFieldUpdateOperationsInput | number
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clerk_id?: StringFieldUpdateOperationsInput | string
    badge?: badgeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type weekUpsertWithoutChoiceInput = {
    update: XOR<weekUpdateWithoutChoiceInput, weekUncheckedUpdateWithoutChoiceInput>
    create: XOR<weekCreateWithoutChoiceInput, weekUncheckedCreateWithoutChoiceInput>
    where?: weekWhereInput
  }

  export type weekUpdateToOneWithWhereWithoutChoiceInput = {
    where?: weekWhereInput
    data: XOR<weekUpdateWithoutChoiceInput, weekUncheckedUpdateWithoutChoiceInput>
  }

  export type weekUpdateWithoutChoiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    game?: gameUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUpdateManyWithoutWeekNestedInput
    league?: leagueUpdateOneRequiredWithoutWeekNestedInput
  }

  export type weekUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    game?: gameUncheckedUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type player_choiceUpsertWithWhereUniqueWithoutChoiceInput = {
    where: player_choiceWhereUniqueInput
    update: XOR<player_choiceUpdateWithoutChoiceInput, player_choiceUncheckedUpdateWithoutChoiceInput>
    create: XOR<player_choiceCreateWithoutChoiceInput, player_choiceUncheckedCreateWithoutChoiceInput>
  }

  export type player_choiceUpdateWithWhereUniqueWithoutChoiceInput = {
    where: player_choiceWhereUniqueInput
    data: XOR<player_choiceUpdateWithoutChoiceInput, player_choiceUncheckedUpdateWithoutChoiceInput>
  }

  export type player_choiceUpdateManyWithWhereWithoutChoiceInput = {
    where: player_choiceScalarWhereInput
    data: XOR<player_choiceUpdateManyMutationInput, player_choiceUncheckedUpdateManyWithoutChoiceInput>
  }

  export type player_choiceScalarWhereInput = {
    AND?: player_choiceScalarWhereInput | player_choiceScalarWhereInput[]
    OR?: player_choiceScalarWhereInput[]
    NOT?: player_choiceScalarWhereInput | player_choiceScalarWhereInput[]
    player_id?: IntFilter<"player_choice"> | number
    choice_id?: IntFilter<"player_choice"> | number
  }

  export type teamCreateWithoutHome_gamesInput = {
    name: string
    away_games?: gameCreateNestedManyWithoutTeam_awayInput
    players?: playerCreateNestedManyWithoutTeamInput
    league: leagueCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutHome_gamesInput = {
    id?: number
    name: string
    league_id: number
    away_games?: gameUncheckedCreateNestedManyWithoutTeam_awayInput
    players?: playerUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutHome_gamesInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutHome_gamesInput, teamUncheckedCreateWithoutHome_gamesInput>
  }

  export type teamCreateWithoutAway_gamesInput = {
    name: string
    home_games?: gameCreateNestedManyWithoutTeam_homeInput
    players?: playerCreateNestedManyWithoutTeamInput
    league: leagueCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutAway_gamesInput = {
    id?: number
    name: string
    league_id: number
    home_games?: gameUncheckedCreateNestedManyWithoutTeam_homeInput
    players?: playerUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutAway_gamesInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutAway_gamesInput, teamUncheckedCreateWithoutAway_gamesInput>
  }

  export type weekCreateWithoutGameInput = {
    name: string
    choice?: choiceCreateNestedManyWithoutWeekInput
    player_rate?: player_rateCreateNestedManyWithoutWeekInput
    league: leagueCreateNestedOneWithoutWeekInput
  }

  export type weekUncheckedCreateWithoutGameInput = {
    id?: number
    name: string
    league_id: number
    choice?: choiceUncheckedCreateNestedManyWithoutWeekInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutWeekInput
  }

  export type weekCreateOrConnectWithoutGameInput = {
    where: weekWhereUniqueInput
    create: XOR<weekCreateWithoutGameInput, weekUncheckedCreateWithoutGameInput>
  }

  export type teamUpsertWithoutHome_gamesInput = {
    update: XOR<teamUpdateWithoutHome_gamesInput, teamUncheckedUpdateWithoutHome_gamesInput>
    create: XOR<teamCreateWithoutHome_gamesInput, teamUncheckedCreateWithoutHome_gamesInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutHome_gamesInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutHome_gamesInput, teamUncheckedUpdateWithoutHome_gamesInput>
  }

  export type teamUpdateWithoutHome_gamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    away_games?: gameUpdateManyWithoutTeam_awayNestedInput
    players?: playerUpdateManyWithoutTeamNestedInput
    league?: leagueUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutHome_gamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    away_games?: gameUncheckedUpdateManyWithoutTeam_awayNestedInput
    players?: playerUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamUpsertWithoutAway_gamesInput = {
    update: XOR<teamUpdateWithoutAway_gamesInput, teamUncheckedUpdateWithoutAway_gamesInput>
    create: XOR<teamCreateWithoutAway_gamesInput, teamUncheckedCreateWithoutAway_gamesInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutAway_gamesInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutAway_gamesInput, teamUncheckedUpdateWithoutAway_gamesInput>
  }

  export type teamUpdateWithoutAway_gamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    home_games?: gameUpdateManyWithoutTeam_homeNestedInput
    players?: playerUpdateManyWithoutTeamNestedInput
    league?: leagueUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutAway_gamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    home_games?: gameUncheckedUpdateManyWithoutTeam_homeNestedInput
    players?: playerUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type weekUpsertWithoutGameInput = {
    update: XOR<weekUpdateWithoutGameInput, weekUncheckedUpdateWithoutGameInput>
    create: XOR<weekCreateWithoutGameInput, weekUncheckedCreateWithoutGameInput>
    where?: weekWhereInput
  }

  export type weekUpdateToOneWithWhereWithoutGameInput = {
    where?: weekWhereInput
    data: XOR<weekUpdateWithoutGameInput, weekUncheckedUpdateWithoutGameInput>
  }

  export type weekUpdateWithoutGameInput = {
    name?: StringFieldUpdateOperationsInput | string
    choice?: choiceUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUpdateManyWithoutWeekNestedInput
    league?: leagueUpdateOneRequiredWithoutWeekNestedInput
  }

  export type weekUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    choice?: choiceUncheckedUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type teamCreateWithoutLeagueInput = {
    name: string
    home_games?: gameCreateNestedManyWithoutTeam_homeInput
    away_games?: gameCreateNestedManyWithoutTeam_awayInput
    players?: playerCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutLeagueInput = {
    id?: number
    name: string
    home_games?: gameUncheckedCreateNestedManyWithoutTeam_homeInput
    away_games?: gameUncheckedCreateNestedManyWithoutTeam_awayInput
    players?: playerUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutLeagueInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutLeagueInput, teamUncheckedCreateWithoutLeagueInput>
  }

  export type teamCreateManyLeagueInputEnvelope = {
    data: teamCreateManyLeagueInput | teamCreateManyLeagueInput[]
    skipDuplicates?: boolean
  }

  export type weekCreateWithoutLeagueInput = {
    name: string
    choice?: choiceCreateNestedManyWithoutWeekInput
    game?: gameCreateNestedManyWithoutWeekInput
    player_rate?: player_rateCreateNestedManyWithoutWeekInput
  }

  export type weekUncheckedCreateWithoutLeagueInput = {
    id?: number
    name: string
    choice?: choiceUncheckedCreateNestedManyWithoutWeekInput
    game?: gameUncheckedCreateNestedManyWithoutWeekInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutWeekInput
  }

  export type weekCreateOrConnectWithoutLeagueInput = {
    where: weekWhereUniqueInput
    create: XOR<weekCreateWithoutLeagueInput, weekUncheckedCreateWithoutLeagueInput>
  }

  export type weekCreateManyLeagueInputEnvelope = {
    data: weekCreateManyLeagueInput | weekCreateManyLeagueInput[]
    skipDuplicates?: boolean
  }

  export type teamUpsertWithWhereUniqueWithoutLeagueInput = {
    where: teamWhereUniqueInput
    update: XOR<teamUpdateWithoutLeagueInput, teamUncheckedUpdateWithoutLeagueInput>
    create: XOR<teamCreateWithoutLeagueInput, teamUncheckedCreateWithoutLeagueInput>
  }

  export type teamUpdateWithWhereUniqueWithoutLeagueInput = {
    where: teamWhereUniqueInput
    data: XOR<teamUpdateWithoutLeagueInput, teamUncheckedUpdateWithoutLeagueInput>
  }

  export type teamUpdateManyWithWhereWithoutLeagueInput = {
    where: teamScalarWhereInput
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyWithoutLeagueInput>
  }

  export type teamScalarWhereInput = {
    AND?: teamScalarWhereInput | teamScalarWhereInput[]
    OR?: teamScalarWhereInput[]
    NOT?: teamScalarWhereInput | teamScalarWhereInput[]
    id?: IntFilter<"team"> | number
    name?: StringFilter<"team"> | string
    league_id?: IntFilter<"team"> | number
  }

  export type weekUpsertWithWhereUniqueWithoutLeagueInput = {
    where: weekWhereUniqueInput
    update: XOR<weekUpdateWithoutLeagueInput, weekUncheckedUpdateWithoutLeagueInput>
    create: XOR<weekCreateWithoutLeagueInput, weekUncheckedCreateWithoutLeagueInput>
  }

  export type weekUpdateWithWhereUniqueWithoutLeagueInput = {
    where: weekWhereUniqueInput
    data: XOR<weekUpdateWithoutLeagueInput, weekUncheckedUpdateWithoutLeagueInput>
  }

  export type weekUpdateManyWithWhereWithoutLeagueInput = {
    where: weekScalarWhereInput
    data: XOR<weekUpdateManyMutationInput, weekUncheckedUpdateManyWithoutLeagueInput>
  }

  export type weekScalarWhereInput = {
    AND?: weekScalarWhereInput | weekScalarWhereInput[]
    OR?: weekScalarWhereInput[]
    NOT?: weekScalarWhereInput | weekScalarWhereInput[]
    id?: IntFilter<"week"> | number
    name?: StringFilter<"week"> | string
    league_id?: IntFilter<"week"> | number
  }

  export type choiceCreateWithoutPlayerInput = {
    points?: number | null
    user: userCreateNestedOneWithoutChoiceInput
    week: weekCreateNestedOneWithoutChoiceInput
    player_choice?: player_choiceCreateNestedManyWithoutChoiceInput
  }

  export type choiceUncheckedCreateWithoutPlayerInput = {
    id?: number
    week_id: number
    user_id: number
    points?: number | null
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type choiceCreateOrConnectWithoutPlayerInput = {
    where: choiceWhereUniqueInput
    create: XOR<choiceCreateWithoutPlayerInput, choiceUncheckedCreateWithoutPlayerInput>
  }

  export type choiceCreateManyPlayerInputEnvelope = {
    data: choiceCreateManyPlayerInput | choiceCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type teamCreateWithoutPlayersInput = {
    name: string
    home_games?: gameCreateNestedManyWithoutTeam_homeInput
    away_games?: gameCreateNestedManyWithoutTeam_awayInput
    league: leagueCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutPlayersInput = {
    id?: number
    name: string
    league_id: number
    home_games?: gameUncheckedCreateNestedManyWithoutTeam_homeInput
    away_games?: gameUncheckedCreateNestedManyWithoutTeam_awayInput
  }

  export type teamCreateOrConnectWithoutPlayersInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
  }

  export type player_choiceCreateWithoutPlayerInput = {
    choice: choiceCreateNestedOneWithoutPlayer_choiceInput
  }

  export type player_choiceUncheckedCreateWithoutPlayerInput = {
    choice_id: number
  }

  export type player_choiceCreateOrConnectWithoutPlayerInput = {
    where: player_choiceWhereUniqueInput
    create: XOR<player_choiceCreateWithoutPlayerInput, player_choiceUncheckedCreateWithoutPlayerInput>
  }

  export type player_choiceCreateManyPlayerInputEnvelope = {
    data: player_choiceCreateManyPlayerInput | player_choiceCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type player_rateCreateWithoutPlayerInput = {
    rate: number
    week: weekCreateNestedOneWithoutPlayer_rateInput
  }

  export type player_rateUncheckedCreateWithoutPlayerInput = {
    id?: number
    week_id: number
    rate: number
  }

  export type player_rateCreateOrConnectWithoutPlayerInput = {
    where: player_rateWhereUniqueInput
    create: XOR<player_rateCreateWithoutPlayerInput, player_rateUncheckedCreateWithoutPlayerInput>
  }

  export type player_rateCreateManyPlayerInputEnvelope = {
    data: player_rateCreateManyPlayerInput | player_rateCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type choiceUpsertWithWhereUniqueWithoutPlayerInput = {
    where: choiceWhereUniqueInput
    update: XOR<choiceUpdateWithoutPlayerInput, choiceUncheckedUpdateWithoutPlayerInput>
    create: XOR<choiceCreateWithoutPlayerInput, choiceUncheckedCreateWithoutPlayerInput>
  }

  export type choiceUpdateWithWhereUniqueWithoutPlayerInput = {
    where: choiceWhereUniqueInput
    data: XOR<choiceUpdateWithoutPlayerInput, choiceUncheckedUpdateWithoutPlayerInput>
  }

  export type choiceUpdateManyWithWhereWithoutPlayerInput = {
    where: choiceScalarWhereInput
    data: XOR<choiceUpdateManyMutationInput, choiceUncheckedUpdateManyWithoutPlayerInput>
  }

  export type choiceScalarWhereInput = {
    AND?: choiceScalarWhereInput | choiceScalarWhereInput[]
    OR?: choiceScalarWhereInput[]
    NOT?: choiceScalarWhereInput | choiceScalarWhereInput[]
    id?: IntFilter<"choice"> | number
    week_id?: IntFilter<"choice"> | number
    user_id?: IntFilter<"choice"> | number
    player_id?: IntFilter<"choice"> | number
    points?: FloatNullableFilter<"choice"> | number | null
  }

  export type teamUpsertWithoutPlayersInput = {
    update: XOR<teamUpdateWithoutPlayersInput, teamUncheckedUpdateWithoutPlayersInput>
    create: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutPlayersInput, teamUncheckedUpdateWithoutPlayersInput>
  }

  export type teamUpdateWithoutPlayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    home_games?: gameUpdateManyWithoutTeam_homeNestedInput
    away_games?: gameUpdateManyWithoutTeam_awayNestedInput
    league?: leagueUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    home_games?: gameUncheckedUpdateManyWithoutTeam_homeNestedInput
    away_games?: gameUncheckedUpdateManyWithoutTeam_awayNestedInput
  }

  export type player_choiceUpsertWithWhereUniqueWithoutPlayerInput = {
    where: player_choiceWhereUniqueInput
    update: XOR<player_choiceUpdateWithoutPlayerInput, player_choiceUncheckedUpdateWithoutPlayerInput>
    create: XOR<player_choiceCreateWithoutPlayerInput, player_choiceUncheckedCreateWithoutPlayerInput>
  }

  export type player_choiceUpdateWithWhereUniqueWithoutPlayerInput = {
    where: player_choiceWhereUniqueInput
    data: XOR<player_choiceUpdateWithoutPlayerInput, player_choiceUncheckedUpdateWithoutPlayerInput>
  }

  export type player_choiceUpdateManyWithWhereWithoutPlayerInput = {
    where: player_choiceScalarWhereInput
    data: XOR<player_choiceUpdateManyMutationInput, player_choiceUncheckedUpdateManyWithoutPlayerInput>
  }

  export type player_rateUpsertWithWhereUniqueWithoutPlayerInput = {
    where: player_rateWhereUniqueInput
    update: XOR<player_rateUpdateWithoutPlayerInput, player_rateUncheckedUpdateWithoutPlayerInput>
    create: XOR<player_rateCreateWithoutPlayerInput, player_rateUncheckedCreateWithoutPlayerInput>
  }

  export type player_rateUpdateWithWhereUniqueWithoutPlayerInput = {
    where: player_rateWhereUniqueInput
    data: XOR<player_rateUpdateWithoutPlayerInput, player_rateUncheckedUpdateWithoutPlayerInput>
  }

  export type player_rateUpdateManyWithWhereWithoutPlayerInput = {
    where: player_rateScalarWhereInput
    data: XOR<player_rateUpdateManyMutationInput, player_rateUncheckedUpdateManyWithoutPlayerInput>
  }

  export type player_rateScalarWhereInput = {
    AND?: player_rateScalarWhereInput | player_rateScalarWhereInput[]
    OR?: player_rateScalarWhereInput[]
    NOT?: player_rateScalarWhereInput | player_rateScalarWhereInput[]
    id?: IntFilter<"player_rate"> | number
    player_id?: IntFilter<"player_rate"> | number
    week_id?: IntFilter<"player_rate"> | number
    rate?: FloatFilter<"player_rate"> | number
  }

  export type choiceCreateWithoutPlayer_choiceInput = {
    points?: number | null
    player: playerCreateNestedOneWithoutChoiceInput
    user: userCreateNestedOneWithoutChoiceInput
    week: weekCreateNestedOneWithoutChoiceInput
  }

  export type choiceUncheckedCreateWithoutPlayer_choiceInput = {
    id?: number
    week_id: number
    user_id: number
    player_id: number
    points?: number | null
  }

  export type choiceCreateOrConnectWithoutPlayer_choiceInput = {
    where: choiceWhereUniqueInput
    create: XOR<choiceCreateWithoutPlayer_choiceInput, choiceUncheckedCreateWithoutPlayer_choiceInput>
  }

  export type playerCreateWithoutPlayer_choiceInput = {
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceCreateNestedManyWithoutPlayerInput
    team?: teamCreateNestedOneWithoutPlayersInput
    player_rate?: player_rateCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutPlayer_choiceInput = {
    id?: number
    team_id?: number | null
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceUncheckedCreateNestedManyWithoutPlayerInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerCreateOrConnectWithoutPlayer_choiceInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutPlayer_choiceInput, playerUncheckedCreateWithoutPlayer_choiceInput>
  }

  export type choiceUpsertWithoutPlayer_choiceInput = {
    update: XOR<choiceUpdateWithoutPlayer_choiceInput, choiceUncheckedUpdateWithoutPlayer_choiceInput>
    create: XOR<choiceCreateWithoutPlayer_choiceInput, choiceUncheckedCreateWithoutPlayer_choiceInput>
    where?: choiceWhereInput
  }

  export type choiceUpdateToOneWithWhereWithoutPlayer_choiceInput = {
    where?: choiceWhereInput
    data: XOR<choiceUpdateWithoutPlayer_choiceInput, choiceUncheckedUpdateWithoutPlayer_choiceInput>
  }

  export type choiceUpdateWithoutPlayer_choiceInput = {
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: playerUpdateOneRequiredWithoutChoiceNestedInput
    user?: userUpdateOneRequiredWithoutChoiceNestedInput
    week?: weekUpdateOneRequiredWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateWithoutPlayer_choiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type playerUpsertWithoutPlayer_choiceInput = {
    update: XOR<playerUpdateWithoutPlayer_choiceInput, playerUncheckedUpdateWithoutPlayer_choiceInput>
    create: XOR<playerCreateWithoutPlayer_choiceInput, playerUncheckedCreateWithoutPlayer_choiceInput>
    where?: playerWhereInput
  }

  export type playerUpdateToOneWithWhereWithoutPlayer_choiceInput = {
    where?: playerWhereInput
    data: XOR<playerUpdateWithoutPlayer_choiceInput, playerUncheckedUpdateWithoutPlayer_choiceInput>
  }

  export type playerUpdateWithoutPlayer_choiceInput = {
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUpdateManyWithoutPlayerNestedInput
    team?: teamUpdateOneWithoutPlayersNestedInput
    player_rate?: player_rateUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutPlayer_choiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUncheckedUpdateManyWithoutPlayerNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type playerCreateWithoutPlayer_rateInput = {
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceCreateNestedManyWithoutPlayerInput
    team?: teamCreateNestedOneWithoutPlayersInput
    player_choice?: player_choiceCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutPlayer_rateInput = {
    id?: number
    team_id?: number | null
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceUncheckedCreateNestedManyWithoutPlayerInput
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerCreateOrConnectWithoutPlayer_rateInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutPlayer_rateInput, playerUncheckedCreateWithoutPlayer_rateInput>
  }

  export type weekCreateWithoutPlayer_rateInput = {
    name: string
    choice?: choiceCreateNestedManyWithoutWeekInput
    game?: gameCreateNestedManyWithoutWeekInput
    league: leagueCreateNestedOneWithoutWeekInput
  }

  export type weekUncheckedCreateWithoutPlayer_rateInput = {
    id?: number
    name: string
    league_id: number
    choice?: choiceUncheckedCreateNestedManyWithoutWeekInput
    game?: gameUncheckedCreateNestedManyWithoutWeekInput
  }

  export type weekCreateOrConnectWithoutPlayer_rateInput = {
    where: weekWhereUniqueInput
    create: XOR<weekCreateWithoutPlayer_rateInput, weekUncheckedCreateWithoutPlayer_rateInput>
  }

  export type playerUpsertWithoutPlayer_rateInput = {
    update: XOR<playerUpdateWithoutPlayer_rateInput, playerUncheckedUpdateWithoutPlayer_rateInput>
    create: XOR<playerCreateWithoutPlayer_rateInput, playerUncheckedCreateWithoutPlayer_rateInput>
    where?: playerWhereInput
  }

  export type playerUpdateToOneWithWhereWithoutPlayer_rateInput = {
    where?: playerWhereInput
    data: XOR<playerUpdateWithoutPlayer_rateInput, playerUncheckedUpdateWithoutPlayer_rateInput>
  }

  export type playerUpdateWithoutPlayer_rateInput = {
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUpdateManyWithoutPlayerNestedInput
    team?: teamUpdateOneWithoutPlayersNestedInput
    player_choice?: player_choiceUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutPlayer_rateInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUncheckedUpdateManyWithoutPlayerNestedInput
    player_choice?: player_choiceUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type weekUpsertWithoutPlayer_rateInput = {
    update: XOR<weekUpdateWithoutPlayer_rateInput, weekUncheckedUpdateWithoutPlayer_rateInput>
    create: XOR<weekCreateWithoutPlayer_rateInput, weekUncheckedCreateWithoutPlayer_rateInput>
    where?: weekWhereInput
  }

  export type weekUpdateToOneWithWhereWithoutPlayer_rateInput = {
    where?: weekWhereInput
    data: XOR<weekUpdateWithoutPlayer_rateInput, weekUncheckedUpdateWithoutPlayer_rateInput>
  }

  export type weekUpdateWithoutPlayer_rateInput = {
    name?: StringFieldUpdateOperationsInput | string
    choice?: choiceUpdateManyWithoutWeekNestedInput
    game?: gameUpdateManyWithoutWeekNestedInput
    league?: leagueUpdateOneRequiredWithoutWeekNestedInput
  }

  export type weekUncheckedUpdateWithoutPlayer_rateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    league_id?: IntFieldUpdateOperationsInput | number
    choice?: choiceUncheckedUpdateManyWithoutWeekNestedInput
    game?: gameUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type gameCreateWithoutTeam_homeInput = {
    team_away: teamCreateNestedOneWithoutAway_gamesInput
    week: weekCreateNestedOneWithoutGameInput
  }

  export type gameUncheckedCreateWithoutTeam_homeInput = {
    id?: number
    team_away_id: number
    week_id: number
  }

  export type gameCreateOrConnectWithoutTeam_homeInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutTeam_homeInput, gameUncheckedCreateWithoutTeam_homeInput>
  }

  export type gameCreateManyTeam_homeInputEnvelope = {
    data: gameCreateManyTeam_homeInput | gameCreateManyTeam_homeInput[]
    skipDuplicates?: boolean
  }

  export type gameCreateWithoutTeam_awayInput = {
    team_home?: teamCreateNestedOneWithoutHome_gamesInput
    week: weekCreateNestedOneWithoutGameInput
  }

  export type gameUncheckedCreateWithoutTeam_awayInput = {
    id?: number
    team_home_id?: number | null
    week_id: number
  }

  export type gameCreateOrConnectWithoutTeam_awayInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutTeam_awayInput, gameUncheckedCreateWithoutTeam_awayInput>
  }

  export type gameCreateManyTeam_awayInputEnvelope = {
    data: gameCreateManyTeam_awayInput | gameCreateManyTeam_awayInput[]
    skipDuplicates?: boolean
  }

  export type playerCreateWithoutTeamInput = {
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceCreateNestedManyWithoutPlayerInput
    player_choice?: player_choiceCreateNestedManyWithoutPlayerInput
    player_rate?: player_rateCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutTeamInput = {
    id?: number
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
    choice?: choiceUncheckedCreateNestedManyWithoutPlayerInput
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutPlayerInput
    player_rate?: player_rateUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerCreateOrConnectWithoutTeamInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput>
  }

  export type playerCreateManyTeamInputEnvelope = {
    data: playerCreateManyTeamInput | playerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type leagueCreateWithoutTeamInput = {
    name: string
    week?: weekCreateNestedManyWithoutLeagueInput
  }

  export type leagueUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    week?: weekUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type leagueCreateOrConnectWithoutTeamInput = {
    where: leagueWhereUniqueInput
    create: XOR<leagueCreateWithoutTeamInput, leagueUncheckedCreateWithoutTeamInput>
  }

  export type gameUpsertWithWhereUniqueWithoutTeam_homeInput = {
    where: gameWhereUniqueInput
    update: XOR<gameUpdateWithoutTeam_homeInput, gameUncheckedUpdateWithoutTeam_homeInput>
    create: XOR<gameCreateWithoutTeam_homeInput, gameUncheckedCreateWithoutTeam_homeInput>
  }

  export type gameUpdateWithWhereUniqueWithoutTeam_homeInput = {
    where: gameWhereUniqueInput
    data: XOR<gameUpdateWithoutTeam_homeInput, gameUncheckedUpdateWithoutTeam_homeInput>
  }

  export type gameUpdateManyWithWhereWithoutTeam_homeInput = {
    where: gameScalarWhereInput
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyWithoutTeam_homeInput>
  }

  export type gameScalarWhereInput = {
    AND?: gameScalarWhereInput | gameScalarWhereInput[]
    OR?: gameScalarWhereInput[]
    NOT?: gameScalarWhereInput | gameScalarWhereInput[]
    id?: IntFilter<"game"> | number
    team_home_id?: IntNullableFilter<"game"> | number | null
    team_away_id?: IntFilter<"game"> | number
    week_id?: IntFilter<"game"> | number
  }

  export type gameUpsertWithWhereUniqueWithoutTeam_awayInput = {
    where: gameWhereUniqueInput
    update: XOR<gameUpdateWithoutTeam_awayInput, gameUncheckedUpdateWithoutTeam_awayInput>
    create: XOR<gameCreateWithoutTeam_awayInput, gameUncheckedCreateWithoutTeam_awayInput>
  }

  export type gameUpdateWithWhereUniqueWithoutTeam_awayInput = {
    where: gameWhereUniqueInput
    data: XOR<gameUpdateWithoutTeam_awayInput, gameUncheckedUpdateWithoutTeam_awayInput>
  }

  export type gameUpdateManyWithWhereWithoutTeam_awayInput = {
    where: gameScalarWhereInput
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyWithoutTeam_awayInput>
  }

  export type playerUpsertWithWhereUniqueWithoutTeamInput = {
    where: playerWhereUniqueInput
    update: XOR<playerUpdateWithoutTeamInput, playerUncheckedUpdateWithoutTeamInput>
    create: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput>
  }

  export type playerUpdateWithWhereUniqueWithoutTeamInput = {
    where: playerWhereUniqueInput
    data: XOR<playerUpdateWithoutTeamInput, playerUncheckedUpdateWithoutTeamInput>
  }

  export type playerUpdateManyWithWhereWithoutTeamInput = {
    where: playerScalarWhereInput
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyWithoutTeamInput>
  }

  export type playerScalarWhereInput = {
    AND?: playerScalarWhereInput | playerScalarWhereInput[]
    OR?: playerScalarWhereInput[]
    NOT?: playerScalarWhereInput | playerScalarWhereInput[]
    id?: IntFilter<"player"> | number
    team_id?: IntNullableFilter<"player"> | number | null
    forename?: StringNullableFilter<"player"> | string | null
    name?: StringNullableFilter<"player"> | string | null
    rating?: FloatNullableFilter<"player"> | number | null
    selected?: BoolFilter<"player"> | boolean
  }

  export type leagueUpsertWithoutTeamInput = {
    update: XOR<leagueUpdateWithoutTeamInput, leagueUncheckedUpdateWithoutTeamInput>
    create: XOR<leagueCreateWithoutTeamInput, leagueUncheckedCreateWithoutTeamInput>
    where?: leagueWhereInput
  }

  export type leagueUpdateToOneWithWhereWithoutTeamInput = {
    where?: leagueWhereInput
    data: XOR<leagueUpdateWithoutTeamInput, leagueUncheckedUpdateWithoutTeamInput>
  }

  export type leagueUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    week?: weekUpdateManyWithoutLeagueNestedInput
  }

  export type leagueUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    week?: weekUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type badgeCreateWithoutUserInput = {
    name: string
  }

  export type badgeUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
  }

  export type badgeCreateOrConnectWithoutUserInput = {
    where: badgeWhereUniqueInput
    create: XOR<badgeCreateWithoutUserInput, badgeUncheckedCreateWithoutUserInput>
  }

  export type choiceCreateWithoutUserInput = {
    points?: number | null
    player: playerCreateNestedOneWithoutChoiceInput
    week: weekCreateNestedOneWithoutChoiceInput
    player_choice?: player_choiceCreateNestedManyWithoutChoiceInput
  }

  export type choiceUncheckedCreateWithoutUserInput = {
    id?: number
    week_id: number
    player_id: number
    points?: number | null
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type choiceCreateOrConnectWithoutUserInput = {
    where: choiceWhereUniqueInput
    create: XOR<choiceCreateWithoutUserInput, choiceUncheckedCreateWithoutUserInput>
  }

  export type choiceCreateManyUserInputEnvelope = {
    data: choiceCreateManyUserInput | choiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type badgeUpsertWithoutUserInput = {
    update: XOR<badgeUpdateWithoutUserInput, badgeUncheckedUpdateWithoutUserInput>
    create: XOR<badgeCreateWithoutUserInput, badgeUncheckedCreateWithoutUserInput>
    where?: badgeWhereInput
  }

  export type badgeUpdateToOneWithWhereWithoutUserInput = {
    where?: badgeWhereInput
    data: XOR<badgeUpdateWithoutUserInput, badgeUncheckedUpdateWithoutUserInput>
  }

  export type badgeUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type badgeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type choiceUpsertWithWhereUniqueWithoutUserInput = {
    where: choiceWhereUniqueInput
    update: XOR<choiceUpdateWithoutUserInput, choiceUncheckedUpdateWithoutUserInput>
    create: XOR<choiceCreateWithoutUserInput, choiceUncheckedCreateWithoutUserInput>
  }

  export type choiceUpdateWithWhereUniqueWithoutUserInput = {
    where: choiceWhereUniqueInput
    data: XOR<choiceUpdateWithoutUserInput, choiceUncheckedUpdateWithoutUserInput>
  }

  export type choiceUpdateManyWithWhereWithoutUserInput = {
    where: choiceScalarWhereInput
    data: XOR<choiceUpdateManyMutationInput, choiceUncheckedUpdateManyWithoutUserInput>
  }

  export type choiceCreateWithoutWeekInput = {
    points?: number | null
    player: playerCreateNestedOneWithoutChoiceInput
    user: userCreateNestedOneWithoutChoiceInput
    player_choice?: player_choiceCreateNestedManyWithoutChoiceInput
  }

  export type choiceUncheckedCreateWithoutWeekInput = {
    id?: number
    user_id: number
    player_id: number
    points?: number | null
    player_choice?: player_choiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type choiceCreateOrConnectWithoutWeekInput = {
    where: choiceWhereUniqueInput
    create: XOR<choiceCreateWithoutWeekInput, choiceUncheckedCreateWithoutWeekInput>
  }

  export type choiceCreateManyWeekInputEnvelope = {
    data: choiceCreateManyWeekInput | choiceCreateManyWeekInput[]
    skipDuplicates?: boolean
  }

  export type gameCreateWithoutWeekInput = {
    team_home?: teamCreateNestedOneWithoutHome_gamesInput
    team_away: teamCreateNestedOneWithoutAway_gamesInput
  }

  export type gameUncheckedCreateWithoutWeekInput = {
    id?: number
    team_home_id?: number | null
    team_away_id: number
  }

  export type gameCreateOrConnectWithoutWeekInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutWeekInput, gameUncheckedCreateWithoutWeekInput>
  }

  export type gameCreateManyWeekInputEnvelope = {
    data: gameCreateManyWeekInput | gameCreateManyWeekInput[]
    skipDuplicates?: boolean
  }

  export type player_rateCreateWithoutWeekInput = {
    rate: number
    player: playerCreateNestedOneWithoutPlayer_rateInput
  }

  export type player_rateUncheckedCreateWithoutWeekInput = {
    id?: number
    player_id: number
    rate: number
  }

  export type player_rateCreateOrConnectWithoutWeekInput = {
    where: player_rateWhereUniqueInput
    create: XOR<player_rateCreateWithoutWeekInput, player_rateUncheckedCreateWithoutWeekInput>
  }

  export type player_rateCreateManyWeekInputEnvelope = {
    data: player_rateCreateManyWeekInput | player_rateCreateManyWeekInput[]
    skipDuplicates?: boolean
  }

  export type leagueCreateWithoutWeekInput = {
    name: string
    team?: teamCreateNestedManyWithoutLeagueInput
  }

  export type leagueUncheckedCreateWithoutWeekInput = {
    id?: number
    name: string
    team?: teamUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type leagueCreateOrConnectWithoutWeekInput = {
    where: leagueWhereUniqueInput
    create: XOR<leagueCreateWithoutWeekInput, leagueUncheckedCreateWithoutWeekInput>
  }

  export type choiceUpsertWithWhereUniqueWithoutWeekInput = {
    where: choiceWhereUniqueInput
    update: XOR<choiceUpdateWithoutWeekInput, choiceUncheckedUpdateWithoutWeekInput>
    create: XOR<choiceCreateWithoutWeekInput, choiceUncheckedCreateWithoutWeekInput>
  }

  export type choiceUpdateWithWhereUniqueWithoutWeekInput = {
    where: choiceWhereUniqueInput
    data: XOR<choiceUpdateWithoutWeekInput, choiceUncheckedUpdateWithoutWeekInput>
  }

  export type choiceUpdateManyWithWhereWithoutWeekInput = {
    where: choiceScalarWhereInput
    data: XOR<choiceUpdateManyMutationInput, choiceUncheckedUpdateManyWithoutWeekInput>
  }

  export type gameUpsertWithWhereUniqueWithoutWeekInput = {
    where: gameWhereUniqueInput
    update: XOR<gameUpdateWithoutWeekInput, gameUncheckedUpdateWithoutWeekInput>
    create: XOR<gameCreateWithoutWeekInput, gameUncheckedCreateWithoutWeekInput>
  }

  export type gameUpdateWithWhereUniqueWithoutWeekInput = {
    where: gameWhereUniqueInput
    data: XOR<gameUpdateWithoutWeekInput, gameUncheckedUpdateWithoutWeekInput>
  }

  export type gameUpdateManyWithWhereWithoutWeekInput = {
    where: gameScalarWhereInput
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyWithoutWeekInput>
  }

  export type player_rateUpsertWithWhereUniqueWithoutWeekInput = {
    where: player_rateWhereUniqueInput
    update: XOR<player_rateUpdateWithoutWeekInput, player_rateUncheckedUpdateWithoutWeekInput>
    create: XOR<player_rateCreateWithoutWeekInput, player_rateUncheckedCreateWithoutWeekInput>
  }

  export type player_rateUpdateWithWhereUniqueWithoutWeekInput = {
    where: player_rateWhereUniqueInput
    data: XOR<player_rateUpdateWithoutWeekInput, player_rateUncheckedUpdateWithoutWeekInput>
  }

  export type player_rateUpdateManyWithWhereWithoutWeekInput = {
    where: player_rateScalarWhereInput
    data: XOR<player_rateUpdateManyMutationInput, player_rateUncheckedUpdateManyWithoutWeekInput>
  }

  export type leagueUpsertWithoutWeekInput = {
    update: XOR<leagueUpdateWithoutWeekInput, leagueUncheckedUpdateWithoutWeekInput>
    create: XOR<leagueCreateWithoutWeekInput, leagueUncheckedCreateWithoutWeekInput>
    where?: leagueWhereInput
  }

  export type leagueUpdateToOneWithWhereWithoutWeekInput = {
    where?: leagueWhereInput
    data: XOR<leagueUpdateWithoutWeekInput, leagueUncheckedUpdateWithoutWeekInput>
  }

  export type leagueUpdateWithoutWeekInput = {
    name?: StringFieldUpdateOperationsInput | string
    team?: teamUpdateManyWithoutLeagueNestedInput
  }

  export type leagueUncheckedUpdateWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    team?: teamUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type player_choiceCreateManyChoiceInput = {
    player_id: number
  }

  export type player_choiceUpdateWithoutChoiceInput = {
    player?: playerUpdateOneRequiredWithoutPlayer_choiceNestedInput
  }

  export type player_choiceUncheckedUpdateWithoutChoiceInput = {
    player_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_choiceUncheckedUpdateManyWithoutChoiceInput = {
    player_id?: IntFieldUpdateOperationsInput | number
  }

  export type teamCreateManyLeagueInput = {
    id?: number
    name: string
  }

  export type weekCreateManyLeagueInput = {
    id?: number
    name: string
  }

  export type teamUpdateWithoutLeagueInput = {
    name?: StringFieldUpdateOperationsInput | string
    home_games?: gameUpdateManyWithoutTeam_homeNestedInput
    away_games?: gameUpdateManyWithoutTeam_awayNestedInput
    players?: playerUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    home_games?: gameUncheckedUpdateManyWithoutTeam_homeNestedInput
    away_games?: gameUncheckedUpdateManyWithoutTeam_awayNestedInput
    players?: playerUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateManyWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type weekUpdateWithoutLeagueInput = {
    name?: StringFieldUpdateOperationsInput | string
    choice?: choiceUpdateManyWithoutWeekNestedInput
    game?: gameUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUpdateManyWithoutWeekNestedInput
  }

  export type weekUncheckedUpdateWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    choice?: choiceUncheckedUpdateManyWithoutWeekNestedInput
    game?: gameUncheckedUpdateManyWithoutWeekNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type weekUncheckedUpdateManyWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type choiceCreateManyPlayerInput = {
    id?: number
    week_id: number
    user_id: number
    points?: number | null
  }

  export type player_choiceCreateManyPlayerInput = {
    choice_id: number
  }

  export type player_rateCreateManyPlayerInput = {
    id?: number
    week_id: number
    rate: number
  }

  export type choiceUpdateWithoutPlayerInput = {
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: userUpdateOneRequiredWithoutChoiceNestedInput
    week?: weekUpdateOneRequiredWithoutChoiceNestedInput
    player_choice?: player_choiceUpdateManyWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player_choice?: player_choiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type player_choiceUpdateWithoutPlayerInput = {
    choice?: choiceUpdateOneRequiredWithoutPlayer_choiceNestedInput
  }

  export type player_choiceUncheckedUpdateWithoutPlayerInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_choiceUncheckedUpdateManyWithoutPlayerInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_rateUpdateWithoutPlayerInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    week?: weekUpdateOneRequiredWithoutPlayer_rateNestedInput
  }

  export type player_rateUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type player_rateUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type gameCreateManyTeam_homeInput = {
    id?: number
    team_away_id: number
    week_id: number
  }

  export type gameCreateManyTeam_awayInput = {
    id?: number
    team_home_id?: number | null
    week_id: number
  }

  export type playerCreateManyTeamInput = {
    id?: number
    forename?: string | null
    name?: string | null
    rating?: number | null
    selected: boolean
  }

  export type gameUpdateWithoutTeam_homeInput = {
    team_away?: teamUpdateOneRequiredWithoutAway_gamesNestedInput
    week?: weekUpdateOneRequiredWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutTeam_homeInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_away_id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
  }

  export type gameUncheckedUpdateManyWithoutTeam_homeInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_away_id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
  }

  export type gameUpdateWithoutTeam_awayInput = {
    team_home?: teamUpdateOneWithoutHome_gamesNestedInput
    week?: weekUpdateOneRequiredWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutTeam_awayInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_home_id?: NullableIntFieldUpdateOperationsInput | number | null
    week_id?: IntFieldUpdateOperationsInput | number
  }

  export type gameUncheckedUpdateManyWithoutTeam_awayInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_home_id?: NullableIntFieldUpdateOperationsInput | number | null
    week_id?: IntFieldUpdateOperationsInput | number
  }

  export type playerUpdateWithoutTeamInput = {
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUpdateManyWithoutPlayerNestedInput
    player_choice?: player_choiceUpdateManyWithoutPlayerNestedInput
    player_rate?: player_rateUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
    choice?: choiceUncheckedUpdateManyWithoutPlayerNestedInput
    player_choice?: player_choiceUncheckedUpdateManyWithoutPlayerNestedInput
    player_rate?: player_rateUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    selected?: BoolFieldUpdateOperationsInput | boolean
  }

  export type choiceCreateManyUserInput = {
    id?: number
    week_id: number
    player_id: number
    points?: number | null
  }

  export type choiceUpdateWithoutUserInput = {
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: playerUpdateOneRequiredWithoutChoiceNestedInput
    week?: weekUpdateOneRequiredWithoutChoiceNestedInput
    player_choice?: player_choiceUpdateManyWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player_choice?: player_choiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type choiceCreateManyWeekInput = {
    id?: number
    user_id: number
    player_id: number
    points?: number | null
  }

  export type gameCreateManyWeekInput = {
    id?: number
    team_home_id?: number | null
    team_away_id: number
  }

  export type player_rateCreateManyWeekInput = {
    id?: number
    player_id: number
    rate: number
  }

  export type choiceUpdateWithoutWeekInput = {
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player?: playerUpdateOneRequiredWithoutChoiceNestedInput
    user?: userUpdateOneRequiredWithoutChoiceNestedInput
    player_choice?: player_choiceUpdateManyWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
    player_choice?: player_choiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type choiceUncheckedUpdateManyWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    points?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type gameUpdateWithoutWeekInput = {
    team_home?: teamUpdateOneWithoutHome_gamesNestedInput
    team_away?: teamUpdateOneRequiredWithoutAway_gamesNestedInput
  }

  export type gameUncheckedUpdateWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_home_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_away_id?: IntFieldUpdateOperationsInput | number
  }

  export type gameUncheckedUpdateManyWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_home_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_away_id?: IntFieldUpdateOperationsInput | number
  }

  export type player_rateUpdateWithoutWeekInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    player?: playerUpdateOneRequiredWithoutPlayer_rateNestedInput
  }

  export type player_rateUncheckedUpdateWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type player_rateUncheckedUpdateManyWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
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