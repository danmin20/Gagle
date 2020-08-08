/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactComponent } from '*.svg';
import styled from '@emotion/styled';

export interface Props {
  icon?: typeof ReactComponent;
  children?: string;
  onClick: () => void;
  align: 'start' | 'middle' | 'end';
}

const HeaderItemDiv = styled.div`
  margin: auto;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function HeaderItem(props: Props) {
  return (
    <HeaderItemDiv>
      {props.icon &&
        jsx(props.icon, {
          css: {
            cursor: 'pointer',
          },
          onClick: props.onClick,
        })}
      <span
        css={{
          cursor: 'pointer',
        }}
        onClick={props.onClick}
      >
        {props.children}
      </span>
    </HeaderItemDiv>
  );
}