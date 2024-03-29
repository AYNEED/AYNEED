import React, { SetStateAction } from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { Tag } from 'src/components/ui/Tag';

export type Props = {
  tags: string[];
  setTags: React.Dispatch<SetStateAction<string[]>>;
};

const style: Styles<'container'> = {
  container: ({ inputWidth }: { inputWidth: number }) => ({
    width: '505px',
    height: '131px',
    border: `1px ${COLOR.SECONDARY_300} solid`,
    padding: '5px',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    rowGap: '5px',
    columnGap: '10px',
    flexWrap: 'wrap',
    alignContent: 'baseline',
    overflowX: 'auto',
    cursor: 'text',
    nested: {
      '>input': {
        width: `${inputWidth}px`,
        outline: 'none',
        border: 'none',
        ...font(FONT_SIZE.S, FONT_WEIGHT.MEDIUM),
        color: COLOR.SECONDARY_100,
      },
    },
  }),
};

export const TagTextArea: React.FC<Props> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = React.useState('');
  const [inputWidth, setInputWidth] = React.useState<number>();

  const handleTagTextAreaClick = (): void => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    const value = event.currentTarget.value;

    if (value.length > 0 && value[value.length - 1] === ' ') {
      props.setTags([...props.tags, value.trim()]);
      setInputValue('');
      setInputWidth(7);
    } else {
      setInputValue(value);
      setInputWidth(10 * value.length);
    }
  };

  const handleRemoveTag = (event: React.FormEvent): void => {
    const newTagList = props.tags.filter(
      (_, index) => index.toString() !== event.currentTarget.id
    );
    props.setTags([...newTagList]);
  };

  return (
    <div onClick={handleTagTextAreaClick}>
      <FelaComponent inputWidth={inputWidth} style={style.container}>
        {props.tags.map((tag, index) => (
          <Tag
            closeCallback={(event: React.FormEvent) => handleRemoveTag(event)}
            index={index}
            key={index}
            isActive={true}
            tagText={tag}
          ></Tag>
        ))}
        <input
          ref={inputRef}
          onChange={(event) => handleInputChange(event)}
          value={inputValue}
        ></input>
      </FelaComponent>
    </div>
  );
};
