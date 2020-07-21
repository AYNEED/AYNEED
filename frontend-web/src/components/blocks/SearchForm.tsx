import React, { useEffect } from 'react';
import { useFormik, FormikConfig } from 'formik';
import { useHistory } from 'react-router-dom';

import { ROUTES } from 'shared';
import { useGetParams } from 'src/hooks/useGetParams';
import { MsgProps } from 'src/i18n/Msg';
import { updateHistory } from 'src/navigation';
import { Search } from 'src/components/icons/Search';
import { InputText, InputRadio } from 'src/components/ui/forms/Input';
import { SearchMode } from 'src/__generated__';

type Props = {
  onSubmit: FormikConfig<{ query: string; mode: SearchMode }>['onSubmit'];
  withChangeHistory?: boolean;
};

const modeToItem: {
  [key in SearchMode]: MsgProps['id'];
} = {
  [SearchMode.Candidates]: 'web.components.blocks.SearchForm.mode_candidates',
  [SearchMode.Users]: 'web.components.blocks.SearchForm.mode_users',
  [SearchMode.Ideas]: 'web.components.blocks.SearchForm.mode_ideas',
  [SearchMode.Concepts]: 'web.components.blocks.SearchForm.mode_concepts',
  [SearchMode.Mvps]: 'web.components.blocks.SearchForm.mode_mvps',
};

const modes = Object.values(SearchMode);

export const SearchForm: React.FC<Props> = ({
  onSubmit,
  withChangeHistory,
}) => {
  const history = useHistory();
  const searchParams = useGetParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseMode = searchParams.get('mode') as any;
  const query = searchParams.get('query') || '';
  const mode: SearchMode = modes.includes(baseMode)
    ? baseMode
    : SearchMode.Candidates;

  const formik = useFormik({
    initialValues: {
      query,
      mode,
    },
    onSubmit,
  });

  useEffect(() => {
    if (withChangeHistory) {
      updateHistory(history, ROUTES.FEED, formik.values);
    }
  }, [history, formik.values, withChangeHistory]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputText
        icon={<Search />}
        name="query"
        value={formik.values.query}
        placeholder={{ id: 'web.components.blocks.SearchForm.form_search' }}
        onChange={formik.handleChange}
        maxLength={80}
      />

      {modes.map((mode) => (
        <InputRadio
          key={mode}
          name="mode"
          value={mode}
          checked={formik.values.mode === mode}
          label={{ id: modeToItem[mode as SearchMode] }}
          onChange={formik.handleChange}
        />
      ))}
    </form>
  );
};
