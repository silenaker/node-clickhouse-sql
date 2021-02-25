export default Dialect;
declare namespace Dialect {
  export function And(...args: any[]): Conjunction;
  export function Or(...args: any[]): Disjunction;
  export function Eq(col: any, val: any): Condition;
  export function Ne(col: any, val: any): Condition;
  export function Gte(col: any, val: any): Condition;
  export function Lte(col: any, val: any): Condition;
  export function Lt(col: any, val: any): Condition;
  export function Gt(col: any, val: any): Conjunction;
  export function _in(col: any, values: any): In;
  export { _in as in };
  export function notIn(col: any, values: any): NotIn;
  export function cast(thing: any, t: any): SQLFunction;
  export { quoteVal };
  export { quoteVal as val };
  export { quoteTerm };
  export { quoteTerm as term };
  export function raw(s: any): Raw;
  export function Condition_1(...args: any[]): Condition;
  export { Condition_1 as Condition };
  export { Select };
  export { EQUALS };
  export { GREATER };
  export { GREATER_OR_EQUALS };
  export { LESS };
  export { LESS_OR_EQUALS };
  export { NOT_EQUALS };
  export { EQ };
  export { GT };
  export { GTE };
  export { LT };
  export { LTE };
  export { NE };
  export function toIPv4(...args: any[]): SQLFunction;
  export function toIPv6(...args: any[]): SQLFunction;
  export function IPv4NumToString(...args: any[]): SQLFunction;
  export function IPv4StringToNum(...args: any[]): SQLFunction;
  export function IPv4NumToStringClassC(...args: any[]): SQLFunction;
  export function IPv6NumToString(...args: any[]): SQLFunction;
  export function IPv6StringToNum(...args: any[]): SQLFunction;
  export function toYear(...args: any[]): SQLFunction;
  export function toMonth(...args: any[]): SQLFunction;
  export function toDayOfMonth(...args: any[]): SQLFunction;
  export function toDayOfWeek(...args: any[]): SQLFunction;
  export function toHour(...args: any[]): SQLFunction;
  export function toMinute(...args: any[]): SQLFunction;
  export function toTime(...args: any[]): SQLFunction;
  export function toDate(...args: any[]): SQLFunction;
  export function toDateTime(...args: any[]): SQLFunction;
  export function toDateTime64(...args: any[]): SQLFunction;
  export function toStartOfDay(...args: any[]): SQLFunction;
  export function toStartOfMonth(...args: any[]): SQLFunction;
  export function toStartOfQuarter(...args: any[]): SQLFunction;
  export function toStartOfYear(...args: any[]): SQLFunction;
  export function toStartOfMinute(...args: any[]): SQLFunction;
  export function toStartOfFiveMinute(...args: any[]): SQLFunction;
  export function toStartOfHour(...args: any[]): SQLFunction;
  export function now(...args: any[]): SQLFunction;
  export function today(...args: any[]): SQLFunction;
  export function yesterday(...args: any[]): SQLFunction;
  export function plus(...args: any[]): SQLFunction;
  export function minus(...args: any[]): SQLFunction;
  export function multiply(...args: any[]): SQLFunction;
  export function divide(...args: any[]): SQLFunction;
  export function intDiv(...args: any[]): SQLFunction;
  export function intDivOrZero(...args: any[]): SQLFunction;
  export function modulo(...args: any[]): SQLFunction;
  export function negate(...args: any[]): SQLFunction;
  export function abs(...args: any[]): SQLFunction;
  export function count(...args: any[]): SQLFunction;
  export function any(...args: any[]): SQLFunction;
  export function anyLast(...args: any[]): SQLFunction;
  export function min(...args: any[]): SQLFunction;
  export function max(...args: any[]): SQLFunction;
  export function sum(...args: any[]): SQLFunction;
  export function avg(...args: any[]): SQLFunction;
  export function uniq(...args: any[]): SQLFunction;
  export function uniqCombined(...args: any[]): SQLFunction;
  export function uniqHLL12(...args: any[]): SQLFunction;
  export function uniqExact(...args: any[]): SQLFunction;
  export function groupArray(...args: any[]): SQLFunction;
  export function groupUniqArray(...args: any[]): SQLFunction;
  export { Conjunction };
  export { Disjunction };
  export { Negation };
  export { In };
  export { NotIn };
  export { GlobalIn };
  export { GlobalNotIn };
}
declare class Conjunction extends Conditions {
  toString(): any;
  clone(): Conjunction;
}
declare class Disjunction extends Conditions {
  toString(): any;
  clone(): Disjunction;
}
declare class Condition extends SQLObject {
  constructor(column: any, operator: any, value: any);
  column: any;
  operator: any;
  value: SQLObject;
  toString(): any;
  clone(): Condition;
}
declare class In extends InclusionOperator {
  constructor(...args: any[]);
  clone(): In;
}
declare class NotIn extends InclusionOperator {
  constructor(...args: any[]);
  clone(): NotIn;
}
declare class SQLFunction extends SQLObject {
  constructor(name: any, ...args: any[]);
  name: any;
  args: any[];
  toString(): any;
  clone(): SQLFunction;
}
declare function quoteVal(value: any): SQLObject;
declare function quoteTerm(term: any): any;
declare class Raw extends SQLObject {
  constructor(string: any);
  raw: any;
  toString(): any;
  clone(): Raw;
}
declare class Select extends Query {
  tables: any[];
  conditions: Conjunction;
  having_conditions: Conjunction;
  preconditions: Conjunction;
  aggregations: any[];
  aggregationsModifier: string;
  select_list: any[];
  order_expressions: any[];
  request_totals: boolean;
  sampling: any;
  limits: {
    number: any;
    offset: any;
  };
  limitbycolumns: {
    limit: any;
    columns: any[];
  };
  fmt: any;
  settings_dict: Settings;
  select(): any[];
  select(...columns: any[]): Select;
  /**
   * @usage
   *  q = selectBuilder->from('table0', ['table1', 'alias1'], { 'table2' : 'alias2'})->toString()
   *  assertEquals(q, "select * from table0, table1 as alias1, table2 as alias2");
   *
   * @param tables
   * @return {Select|Array}
   */
  from(): any[];
  from(...tables: any[]): Select;
  prewhere(...args: any[]): Select;
  orPrewhere(...args: any[]): Select;
  where(cond: Condition): Select;
  where(...args: any[]): Select;
  orWhere(...args: any[]): Select;
  groupBy(...aggregateExpressions: any[]): Select;
  groupByModifier(modifier: any): Select;
  withTotals(request_totals?: boolean): Select;
  limit(number: any, offset: any): Select;
  limitBy(limit: any, ...columns: any[]): Select;
  orderBy(...expressions: any[]): Select;
  format(fmt: any): Select;
  settings(dict: any): Select;
  clone(): Select;
}
declare const EQUALS: "=";
declare const GREATER: ">";
declare const GREATER_OR_EQUALS: ">=";
declare const LESS: "<";
declare const LESS_OR_EQUALS: "<=";
declare const NOT_EQUALS: "!=";
declare const EQ: "=";
declare const GT: ">";
declare const GTE: ">=";
declare const LT: "<";
declare const LTE: "<=";
declare const NE: "!=";
declare class Negation extends Condition {
  toString(): any;
  clone(): Negation;
}
declare class GlobalIn extends InclusionOperator {
  constructor(...args: any[]);
  clone(): GlobalIn;
}
declare class GlobalNotIn extends InclusionOperator {
  constructor(...args: any[]);
  clone(): GlobalNotIn;
}
declare class Conditions extends SQLObject {
  constructor(...args: any[]);
  args: any[];
  push(arg: any): void;
  get length(): number;
  clone(): Conditions;
}
declare class SQLObject {
  clone(): SQLObject;
}
declare class InclusionOperator extends Condition {
  constructor(inclusionType: any, column: any, operator: any, value: any);
  toString(): any;
  clone(): InclusionOperator;
}
declare class Query extends SQLObject {
  clone(): Query;
}
declare class Settings extends SQLObject {
  constructor(dict?: {});
  dict: {};
  toString(): any;
  clone(): Settings;
}
