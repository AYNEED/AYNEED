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
import { Search } from 'src/components/icons/new/Search';
import { InputText, InputRadio } from 'src/components/ui/forms/Input';
import { SearchTargetModel } from 'src/__generated__';

type Props = {
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

const style: Styles<'container' | 'icon' | 'checked'> = {
  container: () => ({
    position: 'relative',
    display: 'flex !important',
    flexDirection: 'row',
    width: '80vw',
    height: '59px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: COLOR.SECONDARY_200,
    boxSizing: 'border-box',
    backgroundColor: COLOR.WHITE,
    paddingRight: '10px',

    ':hover': {
      borderColor: COLOR.SECONDARY_300,
    },

    '> input': {
      cursor: 'text',
      fontSize: '18px',
      lineHeight: '150%',
      backgroundColor: 'transparent',
      color: COLOR.SECONDARY_500,
      outline: '0',
      flex: 1,
      width: '100%',
      height: '100%',
      border: 'none',
      '::placeholder': {
        color: COLOR.SECONDARY_300,
      },
    },

    '> label': {
      cursor: 'pointer',
      padding: '16px',
      fontSize: '18px',
      lineHeight: '150%',
      color: COLOR.SECONDARY_300,

      '> input[type="radio"]': {
        display: 'none',
      },
    },
  }),
  icon: {
    padding: '16.5px',
  },
  checked: {
    color: COLOR.PRIMARY_300 + ' !important',
  },
};

export const SearchForm: React.FC<Props> = ({
  onSubmit,
  withChangeHistory,
}) => {
  const history = useHistory();
  const searchParams = useGetParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseModel = searchParams.get('model') as any;
  const query = searchParams.get('query') || '';
  const model: SearchTargetModel = models.includes(baseModel)
    ? baseModel
    : SearchTargetModel.Candidates;

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
        <InputText
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
      </FelaComponent>
    </form>
  );
};
