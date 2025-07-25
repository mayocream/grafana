import { FormEvent } from 'react';
import { useAsync } from 'react-use';

import { DataSourceInstanceSettings, SelectableValue, TimeRange } from '@grafana/data';
import { selectors } from '@grafana/e2e-selectors';
import { Trans, t } from '@grafana/i18n';
import { getDataSourceSrv } from '@grafana/runtime';
import { QueryVariable } from '@grafana/scenes';
import { DataSourceRef, VariableRefresh, VariableSort } from '@grafana/schema';
import { Field, TextLink } from '@grafana/ui';
import { QueryEditor } from 'app/features/dashboard-scene/settings/variables/components/QueryEditor';
import { SelectionOptionsForm } from 'app/features/dashboard-scene/settings/variables/components/SelectionOptionsForm';
import { DataSourcePicker } from 'app/features/datasources/components/picker/DataSourcePicker';
import { getVariableQueryEditor } from 'app/features/variables/editor/getVariableQueryEditor';
import { QueryVariableRefreshSelect } from 'app/features/variables/query/QueryVariableRefreshSelect';
import { QueryVariableSortSelect } from 'app/features/variables/query/QueryVariableSortSelect';
import {
  StaticOptionsOrderType,
  StaticOptionsType,
  QueryVariableStaticOptions,
} from 'app/features/variables/query/QueryVariableStaticOptions';

import { VariableLegend } from './VariableLegend';
import { VariableTextAreaField } from './VariableTextAreaField';

type VariableQueryType = QueryVariable['state']['query'];

interface QueryVariableEditorFormProps {
  datasource?: DataSourceRef;
  onDataSourceChange: (dsSettings: DataSourceInstanceSettings) => void;
  query: VariableQueryType;
  onQueryChange: (query: VariableQueryType) => void;
  onLegacyQueryChange: (query: VariableQueryType, definition: string) => void;
  timeRange: TimeRange;
  regex: string | null;
  onRegExChange: (event: FormEvent<HTMLTextAreaElement>) => void;
  sort: VariableSort;
  onSortChange: (option: SelectableValue<VariableSort>) => void;
  refresh: VariableRefresh;
  onRefreshChange: (option: VariableRefresh) => void;
  isMulti: boolean;
  onMultiChange: (event: FormEvent<HTMLInputElement>) => void;
  allowCustomValue?: boolean;
  onAllowCustomValueChange?: (event: FormEvent<HTMLInputElement>) => void;
  includeAll: boolean;
  onIncludeAllChange: (event: FormEvent<HTMLInputElement>) => void;
  allValue: string;
  onAllValueChange: (event: FormEvent<HTMLInputElement>) => void;
  staticOptions?: StaticOptionsType;
  staticOptionsOrder?: StaticOptionsOrderType;
  onStaticOptionsChange?: (staticOptions: StaticOptionsType) => void;
  onStaticOptionsOrderChange?: (staticOptionsOrder: StaticOptionsOrderType) => void;
}

export function QueryVariableEditorForm({
  datasource: datasourceRef,
  onDataSourceChange,
  query,
  onQueryChange,
  onLegacyQueryChange,
  timeRange,
  regex,
  onRegExChange,
  sort,
  onSortChange,
  refresh,
  onRefreshChange,
  isMulti,
  onMultiChange,
  allowCustomValue,
  onAllowCustomValueChange,
  includeAll,
  onIncludeAllChange,
  allValue,
  onAllValueChange,
  staticOptions,
  staticOptionsOrder,
  onStaticOptionsChange,
  onStaticOptionsOrderChange,
}: QueryVariableEditorFormProps) {
  const { value: dsConfig } = useAsync(async () => {
    const datasource = await getDataSourceSrv().get(datasourceRef ?? '');
    const VariableQueryEditor = await getVariableQueryEditor(datasource);
    const defaultQuery = datasource?.variables?.getDefaultQuery?.();

    if (!query && defaultQuery) {
      const query =
        typeof defaultQuery === 'string' ? defaultQuery : { ...defaultQuery, refId: defaultQuery.refId ?? 'A' };
      onQueryChange(query);
    }

    return { datasource, VariableQueryEditor };
  }, [datasourceRef]);

  const { datasource, VariableQueryEditor } = dsConfig ?? {};

  return (
    <>
      <VariableLegend>
        <Trans i18nKey="dashboard-scene.query-variable-editor-form.query-options">Query options</Trans>
      </VariableLegend>
      <Field
        label={t('dashboard-scene.query-variable-editor-form.label-data-source', 'Data source')}
        htmlFor="data-source-picker"
      >
        <DataSourcePicker current={datasourceRef} onChange={onDataSourceChange} variables={true} width={30} />
      </Field>

      {datasource && VariableQueryEditor && (
        <QueryEditor
          onQueryChange={onQueryChange}
          onLegacyQueryChange={onLegacyQueryChange}
          datasource={datasource}
          query={query}
          VariableQueryEditor={VariableQueryEditor}
          timeRange={timeRange}
        />
      )}

      <VariableTextAreaField
        defaultValue={regex ?? ''}
        name={t('dashboard-scene.query-variable-editor-form.name-regex', 'Regex')}
        description={
          <div>
            <Trans i18nKey="dashboard-scene.query-variable-editor-form.description-optional">
              Optional, if you want to extract part of a series name or metric node segment.
            </Trans>
            <br />
            <Trans i18nKey="dashboard-scene.query-variable-editor-form.description-examples">
              Named capture groups can be used to separate the display text and value (
              <TextLink
                href="https://grafana.com/docs/grafana/latest/variables/filter-variables-with-regex#filter-and-modify-using-named-text-and-value-capture-groups"
                external
              >
                see examples
              </TextLink>
              ).
            </Trans>
          </div>
        }
        // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
        placeholder="/.*-(?<text>.*)-(?<value>.*)-.*/"
        onBlur={onRegExChange}
        testId={selectors.pages.Dashboard.Settings.Variables.Edit.QueryVariable.queryOptionsRegExInputV2}
        width={52}
      />

      <QueryVariableSortSelect
        testId={selectors.pages.Dashboard.Settings.Variables.Edit.QueryVariable.queryOptionsSortSelectV2}
        onChange={onSortChange}
        sort={sort}
      />

      <QueryVariableRefreshSelect
        testId={selectors.pages.Dashboard.Settings.Variables.Edit.QueryVariable.queryOptionsRefreshSelectV2}
        onChange={onRefreshChange}
        refresh={refresh}
      />

      {onStaticOptionsChange && onStaticOptionsOrderChange && (
        <QueryVariableStaticOptions
          staticOptions={staticOptions}
          staticOptionsOrder={staticOptionsOrder}
          onStaticOptionsChange={onStaticOptionsChange}
          onStaticOptionsOrderChange={onStaticOptionsOrderChange}
        />
      )}

      <VariableLegend>
        <Trans i18nKey="dashboard-scene.query-variable-editor-form.selection-options">Selection options</Trans>
      </VariableLegend>
      <SelectionOptionsForm
        multi={!!isMulti}
        includeAll={!!includeAll}
        allowCustomValue={allowCustomValue}
        allValue={allValue}
        onMultiChange={onMultiChange}
        onIncludeAllChange={onIncludeAllChange}
        onAllValueChange={onAllValueChange}
        onAllowCustomValueChange={onAllowCustomValueChange}
      />
    </>
  );
}
