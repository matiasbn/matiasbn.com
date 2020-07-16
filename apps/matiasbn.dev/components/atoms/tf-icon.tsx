import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';

const Icon = styled.img<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : 'white')};
  width: 10rem;
`;

const Anchor = styled.a``;

interface Props extends AllHTMLAttributes<{}> {}

const FooterIcon = (props: Props) => {
  const { href, src } = props;
  return (
    <Anchor href={href}>
      <Icon src={src} />
    </Anchor>
  );
};

export default FooterIcon;
