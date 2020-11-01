import React, { useEffect, useState } from 'react';
import { FelaComponent } from 'react-fela';

import { useFormik, FormikConfig } from 'formik';
import { useHistory } from 'react-router-dom';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { ROUTES } from 'shared';
import { useGetParams } from 'src/hooks/useGetParams';
import { MsgProps } from 'src/i18n/Msg';
import { updateHistory } from 'src/navigation';
import { Search } from 'src/components/icons/interactions/Search';
import { InputSearch, InputRadio } from 'src/components/ui/forms/Input';
import { SearchTargetModel } from 'src/__generated__';

export type Props = {
  mode: 'general' | 'single';
  onSubmit: FormikConfig<{
    query: string;
    model: SearchTargetModel;
  }>['onSubmit'];
  withChangeHistory?: boolean;
};

const modelToItem: {
  [key in SearchTargetModel]: MsgProps['id'];
} = {
  [SearchTargetModel.Candidates]:
    'web.components.blocks.SearchForm.model_candidates',
  [SearchTargetModel.Users]: 'web.components.blocks.SearchForm.model_users',
  [SearchTargetModel.Ideas]: 'web.components.blocks.SearchForm.model_ideas',
  [SearchTargetModel.Concepts]:
    'web.components.blocks.SearchForm.model_concepts',
  [SearchTargetModel.Mvps]: 'web.components.blocks.SearchForm.model_mvps',
};

const models = Object.values(SearchTargetModel);

const style: Styles<'container' | 'checked'> = {
  container: () => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '59px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: COLOR.SECONDARY_200,
    boxSizing: 'border-box',
    backgroundColor: COLOR.WHITE,
    paddingRight: '10px',

    nested: {
      ':hover': {
        borderColor: COLOR.SECONDARY_300,
      },
      '>div': {
        padding: '16px',
      },
      '>div> input': {
        cursor: 'text',
        fontSize: '18px',
        lineHeight: '150%',
        backgroundColor: 'transparent',
        color: COLOR.SECONDARY_100,
        outline: '0',
        width: '100%',
        height: '100%',
        border: 'none',
        '::placeholder': {
          color: COLOR.SECONDARY_300,
        },
      },
      '>div> label': {
        cursor: 'pointer',
        fontSize: '18px',
        lineHeight: '150%',
        color: COLOR.SECONDARY_300,
        '> input[type="radio"]': {
          display: 'none',
        },
      },
    },
  }),
  checked: {
    color: COLOR.PRIMARY_300 + ' !important',
  },
};

const getModel = (params: URLSearchParams): SearchTargetModel => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseModel = params.get('model') as any;
  return models.includes(baseModel) ? baseModel : SearchTargetModel.Candidates;
};

export const SearchForm: React.FC<Props> = ({
  mode,
  onSubmit,
  withChangeHistory,
}) => {
  const history = useHistory();
  const searchParams = useGetParams();

  const query = searchParams.get('query') || '';
  const model = getModel(searchParams);

  const formik = useFormik({
    initialValues: {
      query,
      model,
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
    <form
      onSubmit={formik.handleSubmit}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <FelaComponent style={style.container}>
        <InputSearch
          icon={
            <Search
              fill={isFocused ? COLOR.PRIMARY_500 : COLOR.SECONDARY_400}
            />
          }
          name="query"
          value={formik.values.query}
          placeholder={{
            id: 'web.components.blocks.SearchForm.form_search',
          }}
          onChange={formik.handleChange}
          maxLength={80}
        />
        {mode === 'general' && (
          <FelaComponent style={style.checked}>
            {({ className }) =>
              models.map((model) => (
                <InputRadio
                  className={
                    formik.values.model === model ? className : undefined
                  }
                  key={model}
                  name="model"
                  value={model}
                  checked={formik.values.model === model}
                  label={{ id: modelToItem[model as SearchTargetModel] }}
                  onChange={formik.handleChange}
                />
              ))
            }
          </FelaComponent>
        )}
      </FelaComponent>
    </form>
  );
};
