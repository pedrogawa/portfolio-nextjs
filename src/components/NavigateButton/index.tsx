import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import { Container } from './styles';

interface NavigateButtonProps {
  name: string;
  path: string;
  changePage: () => void;
}

export default function NavigateButton({
  name,
  path,
  changePage
}: NavigateButtonProps) {
  const router = useRouter();

  const { asPath } = useRouter();

  const handleChangePage = useCallback(() => {
    router.push(path);
    changePage();
  }, [changePage, path, router]);

  return (
    <Container active={asPath === path} onClick={handleChangePage}>
      <span>{name}</span>
      <div />
    </Container>
  );
}
