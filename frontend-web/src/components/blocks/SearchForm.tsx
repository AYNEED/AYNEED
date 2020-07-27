import React, { useEffect, useState } from 'react';
import { Styles } from 'src/utils/fela';
import { FelaComponent } from 'react-fela';
import { COLOR } from 'src/constants/colors';

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

const style: Styles<'inputCheckable' | 'input' | 'container' | 'icon'> = {
  inputCheckable: {
    padding: '16px',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    lineHeight: '150%',
    color: '#C2CFE0',
    float: 'right',
  },
  input: {
    zIndex: -1,
    cursor: 'pointer',
    position: 'absolute',
    background: 'transparent',
    outline: '0',
    width: '100%',
    height: '100%',
    border: 'none',
  },
  container: {
    zIndex: 0,
    marginTop: '108.7px',
    position: 'relative',
    width: '70%',
    height: '59px',
    border: '1px solid #E4E9F0',
    boxSizing: 'border-box',
  },
  icon: {
    float: 'left',
    padding: '16.5px',
  },
};

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

  const [isFocused, setIsFocused] = useState(false);

  return (
    <FelaComponent style={style.container}>
      <form
        onSubmit={formik.handleSubmit}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      >
        <FelaComponent style={style.input}>
          {({ className }) => (
            <InputText
              className={className}
              icon={
                <FelaComponent style={style.icon}>
                  <Search
                    fill={isFocused ? COLOR.PRIMARY_500 : COLOR.SECONDARY_400}
                  />
                </FelaComponent>
              }
              name="query"
              value={formik.values.query}
              placeholder={{
                id: 'web.components.blocks.SearchForm.form_search',
              }}
              onChange={formik.handleChange}
              maxLength={80}
            />
          )}
        </FelaComponent>
        {modes.map((mode) => (
          <FelaComponent style={style.inputCheckable}>
            {({ className }) => (
              <InputRadio
                className={className}
                key={mode}
                name="mode"
                value={mode}
                checked={formik.values.mode === mode}
                label={{ id: modeToItem[mode as SearchMode] }}
                onChange={formik.handleChange}
              />
            )}
          </FelaComponent>
        ))}
      </form>
    </FelaComponent>
  );
};
