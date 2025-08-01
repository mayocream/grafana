// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTsTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as common from '@grafana/schema';

export interface AzureMonitorQuery extends common.DataQuery {
  /**
   * Azure Monitor Logs sub-query properties.
   */
  azureLogAnalytics?: AzureLogsQuery;
  /**
   * Azure Monitor Metrics sub-query properties.
   */
  azureMonitor?: AzureMetricQuery;
  /**
   * Azure Resource Graph sub-query properties.
   */
  azureResourceGraph?: AzureResourceGraphQuery;
  /**
   * Application Insights Traces sub-query properties.
   */
  azureTraces?: AzureTracesQuery;
  /**
   * Custom namespace used in template variable queries
   */
  customNamespace?: string;
  /**
   * @deprecated Legacy template variable support.
   */
  grafanaTemplateVariableFn?: GrafanaTemplateVariableQuery;
  /**
   * Namespace used in template variable queries
   */
  namespace?: string;
  /**
   * Used only for exemplar queries from Prometheus
   */
  query?: string;
  /**
   * Region used in template variable queries
   */
  region?: string;
  /**
   * Resource used in template variable queries
   */
  resource?: string;
  /**
   * Resource group used in template variable queries
   */
  resourceGroup?: string;
  /**
   * Azure subscription containing the resource(s) to be queried.
   * Also used for template variable queries
   */
  subscription?: string;
  /**
   * Subscriptions to be queried via Azure Resource Graph.
   */
  subscriptions?: Array<string>;
  /**
   * Used to configure the HTTP request timeout
   */
  timeout?: number;
}

export const defaultAzureMonitorQuery: Partial<AzureMonitorQuery> = {
  subscriptions: [],
};

/**
 * Defines the supported queryTypes. GrafanaTemplateVariableFn is deprecated
 */
export enum AzureQueryType {
  AzureMonitor = 'Azure Monitor',
  AzureResourceGraph = 'Azure Resource Graph',
  AzureTraces = 'Azure Traces',
  CustomMetricNamesQuery = 'Azure Custom Metric Names',
  CustomNamespacesQuery = 'Azure Custom Namespaces',
  GrafanaTemplateVariableFn = 'Grafana Template Variable Function',
  LocationsQuery = 'Azure Regions',
  LogAnalytics = 'Azure Log Analytics',
  MetricNamesQuery = 'Azure Metric Names',
  NamespacesQuery = 'Azure Namespaces',
  ResourceGroupsQuery = 'Azure Resource Groups',
  ResourceNamesQuery = 'Azure Resource Names',
  SubscriptionsQuery = 'Azure Subscriptions',
  TraceExemplar = 'traceql',
  WorkspacesQuery = 'Azure Workspaces',
}

export interface AzureMetricQuery {
  /**
   * The aggregation to be used within the query. Defaults to the primaryAggregationType defined by the metric.
   */
  aggregation?: string;
  /**
   * Aliases can be set to modify the legend labels. e.g. {{ resourceGroup }}. See docs for more detail.
   */
  alias?: string;
  /**
   * Time grains that are supported by the metric.
   */
  allowedTimeGrainsMs?: Array<number>;
  /**
   * Used as the value for the metricNamespace property when it's different from the resource namespace.
   */
  customNamespace?: string;
  /**
   * @deprecated This property was migrated to dimensionFilters and should only be accessed in the migration
   */
  dimension?: string;
  /**
   * @deprecated This property was migrated to dimensionFilters and should only be accessed in the migration
   */
  dimensionFilter?: string;
  /**
   * Filters to reduce the set of data returned. Dimensions that can be filtered on are defined by the metric.
   */
  dimensionFilters?: Array<AzureMetricDimension>;
  /**
   * @deprecated Use metricNamespace instead
   */
  metricDefinition?: string;
  /**
   * The metric to query data for within the specified metricNamespace. e.g. UsedCapacity
   */
  metricName?: string;
  /**
   * metricNamespace is used as the resource type (or resource namespace).
   * It's usually equal to the target metric namespace. e.g. microsoft.storage/storageaccounts
   * Kept the name of the variable as metricNamespace to avoid backward incompatibility issues.
   */
  metricNamespace?: string;
  /**
   * The Azure region containing the resource(s).
   */
  region?: string;
  /**
   * @deprecated Use resources instead
   */
  resourceGroup?: string;
  /**
   * @deprecated Use resources instead
   */
  resourceName?: string;
  /**
   * @deprecated Use resourceGroup, resourceName and metricNamespace instead
   */
  resourceUri?: string;
  /**
   * Array of resource URIs to be queried.
   */
  resources?: Array<AzureMonitorResource>;
  /**
   * The granularity of data points to be queried. Defaults to auto.
   */
  timeGrain?: string;
  /**
   * @deprecated
   */
  timeGrainUnit?: string;
  /**
   * Maximum number of records to return. Defaults to 10.
   */
  top?: string;
}

export const defaultAzureMetricQuery: Partial<AzureMetricQuery> = {
  allowedTimeGrainsMs: [],
  dimensionFilters: [],
  resources: [],
};

/**
 * Azure Monitor Logs sub-query properties
 */
export interface AzureLogsQuery {
  /**
   * If set to true the query will be run as a basic logs query
   */
  basicLogsQuery?: boolean;
  /**
   * Builder query to be executed.
   */
  builderQuery?: BuilderQueryExpression;
  /**
   * If set to true the dashboard time range will be used as a filter for the query. Otherwise the query time ranges will be used. Defaults to false.
   */
  dashboardTime?: boolean;
  /**
   * @deprecated Use dashboardTime instead
   */
  intersectTime?: boolean;
  /**
   * Denotes if logs query editor is in builder mode
   */
  mode?: LogsEditorMode;
  /**
   * KQL query to be executed.
   */
  query?: string;
  /**
   * @deprecated Use resources instead
   */
  resource?: string;
  /**
   * Array of resource URIs to be queried.
   */
  resources?: Array<string>;
  /**
   * Specifies the format results should be returned as.
   */
  resultFormat?: ResultFormat;
  /**
   * If dashboardTime is set to true this value dictates which column the time filter will be applied to. Defaults to the first tables timeSpan column, the first datetime column found, or TimeGenerated
   */
  timeColumn?: string;
  /**
   * Workspace ID. This was removed in Grafana 8, but remains for backwards compat.
   */
  workspace?: string;
}

export const defaultAzureLogsQuery: Partial<AzureLogsQuery> = {
  resources: [],
};

/**
 * Application Insights Traces sub-query properties
 */
export interface AzureTracesQuery {
  /**
   * Filters for property values.
   */
  filters?: Array<AzureTracesFilter>;
  /**
   * Operation ID. Used only for Traces queries.
   */
  operationId?: string;
  /**
   * KQL query to be executed.
   */
  query?: string;
  /**
   * Array of resource URIs to be queried.
   */
  resources?: Array<string>;
  /**
   * Specifies the format results should be returned as.
   */
  resultFormat?: ResultFormat;
  /**
   * Types of events to filter by.
   */
  traceTypes?: Array<string>;
}

export const defaultAzureTracesQuery: Partial<AzureTracesQuery> = {
  filters: [],
  resources: [],
  traceTypes: [],
};

export interface AzureTracesFilter {
  /**
   * Values to filter by.
   */
  filters: Array<string>;
  /**
   * Comparison operator to use. Either equals or not equals.
   */
  operation: string;
  /**
   * Property name, auto-populated based on available traces.
   */
  property: string;
}

export const defaultAzureTracesFilter: Partial<AzureTracesFilter> = {
  filters: [],
};

export enum ResultFormat {
  Logs = 'logs',
  Table = 'table',
  TimeSeries = 'time_series',
  Trace = 'trace',
}

export enum LogsEditorMode {
  Builder = 'builder',
  Raw = 'raw',
}

export enum BuilderQueryEditorExpressionType {
  And = 'and',
  Function_parameter = 'function_parameter',
  Group_by = 'group_by',
  Operator = 'operator',
  Or = 'or',
  Order_by = 'order_by',
  Property = 'property',
  Reduce = 'reduce',
}

export enum BuilderQueryEditorPropertyType {
  Boolean = 'boolean',
  Datetime = 'datetime',
  Function = 'function',
  Interval = 'interval',
  Number = 'number',
  String = 'string',
  Time_span = 'time_span',
}

export enum BuilderQueryEditorOrderByOptions {
  Asc = 'asc',
  Desc = 'desc',
}

export interface BuilderQueryEditorProperty {
  name: string;
  type: BuilderQueryEditorPropertyType;
}

export interface BuilderQueryEditorPropertyExpression {
  property: BuilderQueryEditorProperty;
  type: BuilderQueryEditorExpressionType;
}

export interface BuilderQueryEditorColumnsExpression {
  columns?: Array<string>;
  type: BuilderQueryEditorExpressionType;
}

export const defaultBuilderQueryEditorColumnsExpression: Partial<BuilderQueryEditorColumnsExpression> = {
  columns: [],
};

export interface SelectableValue {
  label: string;
  value: string;
}

export type BuilderQueryEditorOperatorType = (string | boolean | number | SelectableValue);

export interface BuilderQueryEditorOperator {
  labelValue?: string;
  name: string;
  value: string;
}

export interface BuilderQueryEditorWhereExpressionItems {
  operator: BuilderQueryEditorOperator;
  property: BuilderQueryEditorProperty;
  type: BuilderQueryEditorExpressionType;
}

export interface BuilderQueryEditorWhereExpression {
  expressions: Array<BuilderQueryEditorWhereExpressionItems>;
  type: BuilderQueryEditorExpressionType;
}

export const defaultBuilderQueryEditorWhereExpression: Partial<BuilderQueryEditorWhereExpression> = {
  expressions: [],
};

export interface BuilderQueryEditorWhereExpressionArray {
  expressions: Array<BuilderQueryEditorWhereExpression>;
  type: BuilderQueryEditorExpressionType;
}

export const defaultBuilderQueryEditorWhereExpressionArray: Partial<BuilderQueryEditorWhereExpressionArray> = {
  expressions: [],
};

export interface BuilderQueryEditorFunctionParameterExpression {
  fieldType: BuilderQueryEditorPropertyType;
  type: BuilderQueryEditorExpressionType;
  value: string;
}

export interface BuilderQueryEditorReduceExpression {
  focus?: boolean;
  parameters?: Array<BuilderQueryEditorFunctionParameterExpression>;
  property?: BuilderQueryEditorProperty;
  reduce?: BuilderQueryEditorProperty;
}

export const defaultBuilderQueryEditorReduceExpression: Partial<BuilderQueryEditorReduceExpression> = {
  parameters: [],
};

export interface BuilderQueryEditorReduceExpressionArray {
  expressions: Array<BuilderQueryEditorReduceExpression>;
  type: BuilderQueryEditorExpressionType;
}

export const defaultBuilderQueryEditorReduceExpressionArray: Partial<BuilderQueryEditorReduceExpressionArray> = {
  expressions: [],
};

export interface BuilderQueryEditorGroupByExpression {
  focus?: boolean;
  interval?: BuilderQueryEditorProperty;
  property?: BuilderQueryEditorProperty;
  type?: BuilderQueryEditorExpressionType;
}

export interface BuilderQueryEditorGroupByExpressionArray {
  expressions: Array<BuilderQueryEditorGroupByExpression>;
  type: BuilderQueryEditorExpressionType;
}

export const defaultBuilderQueryEditorGroupByExpressionArray: Partial<BuilderQueryEditorGroupByExpressionArray> = {
  expressions: [],
};

export interface BuilderQueryEditorOrderByExpression {
  order: BuilderQueryEditorOrderByOptions;
  property: BuilderQueryEditorProperty;
  type: BuilderQueryEditorExpressionType;
}

export interface BuilderQueryEditorOrderByExpressionArray {
  expressions: Array<BuilderQueryEditorOrderByExpression>;
  type: BuilderQueryEditorExpressionType;
}

export const defaultBuilderQueryEditorOrderByExpressionArray: Partial<BuilderQueryEditorOrderByExpressionArray> = {
  expressions: [],
};

export interface BuilderQueryExpression {
  columns?: BuilderQueryEditorColumnsExpression;
  from?: BuilderQueryEditorPropertyExpression;
  fuzzySearch?: BuilderQueryEditorWhereExpressionArray;
  groupBy?: BuilderQueryEditorGroupByExpressionArray;
  limit?: number;
  orderBy?: BuilderQueryEditorOrderByExpressionArray;
  reduce?: BuilderQueryEditorReduceExpressionArray;
  timeFilter?: BuilderQueryEditorWhereExpressionArray;
  where?: BuilderQueryEditorWhereExpressionArray;
}

export enum ARGScope {
  Directory = 'directory',
  Subscription = 'subscription',
}

export interface AzureResourceGraphQuery {
  /**
   * Azure Resource Graph KQL query to be executed.
   */
  query?: string;
  /**
   * Specifies the format results should be returned as. Defaults to table.
   */
  resultFormat?: string;
  /**
   * Specifies the scope of the query. Defaults to subscription.
   */
  scope?: ARGScope;
}

export interface AzureMonitorResource {
  metricNamespace?: string;
  region?: string;
  resourceGroup?: string;
  resourceName?: string;
  subscription?: string;
}

export interface AzureMetricDimension {
  /**
   * Name of Dimension to be filtered on.
   */
  dimension?: string;
  /**
   * @deprecated filter is deprecated in favour of filters to support multiselect.
   */
  filter?: string;
  /**
   * Values to match with the filter.
   */
  filters?: Array<string>;
  /**
   * String denoting the filter operation. Supports 'eq' - equals,'ne' - not equals, 'sw' - starts with. Note that some dimensions may not support all operators.
   */
  operator?: string;
}

export const defaultAzureMetricDimension: Partial<AzureMetricDimension> = {
  filters: [],
};

export type GrafanaTemplateVariableQueryType = ('AppInsightsMetricNameQuery' | 'AppInsightsGroupByQuery' | 'SubscriptionsQuery' | 'ResourceGroupsQuery' | 'ResourceNamesQuery' | 'MetricNamespaceQuery' | 'MetricNamesQuery' | 'WorkspacesQuery' | 'UnknownQuery');

export interface BaseGrafanaTemplateVariableQuery {
  rawQuery?: string;
}

export interface UnknownQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'UnknownQuery';
}

export interface AppInsightsMetricNameQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'AppInsightsMetricNameQuery';
}

export interface AppInsightsGroupByQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'AppInsightsGroupByQuery';
  metricName: string;
}

export interface SubscriptionsQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'SubscriptionsQuery';
}

export interface ResourceGroupsQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'ResourceGroupsQuery';
  subscription: string;
}

export interface ResourceNamesQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'ResourceNamesQuery';
  metricNamespace: string;
  resourceGroup: string;
  subscription: string;
}

export interface MetricNamespaceQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'MetricNamespaceQuery';
  metricNamespace?: string;
  resourceGroup: string;
  resourceName?: string;
  subscription: string;
}

/**
 * @deprecated Use MetricNamespaceQuery instead
 */
export interface MetricDefinitionsQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'MetricDefinitionsQuery';
  metricNamespace?: string;
  resourceGroup: string;
  resourceName?: string;
  subscription: string;
}

export interface MetricNamesQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'MetricNamesQuery';
  metricNamespace: string;
  resourceGroup: string;
  resourceName: string;
  subscription: string;
}

export interface WorkspacesQuery extends BaseGrafanaTemplateVariableQuery {
  kind: 'WorkspacesQuery';
  subscription: string;
}

export type GrafanaTemplateVariableQuery = (AppInsightsMetricNameQuery | AppInsightsGroupByQuery | SubscriptionsQuery | ResourceGroupsQuery | ResourceNamesQuery | MetricNamespaceQuery | MetricDefinitionsQuery | MetricNamesQuery | WorkspacesQuery | UnknownQuery);

export interface AzureMonitorDataQuery {}
