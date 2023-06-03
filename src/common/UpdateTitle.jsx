import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const defaultTitle = 'Quality and affordable printing solutions';

export const UpdateTitle = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState(defaultTitle);

  useEffect(() => {
    const pathnames = pathname.split('/');
    if (pathnames[pathnames.length - 1] === '') {
      setTitle(defaultTitle);
      return;
    }
    
    const formattedPathName = pathnames[pathnames.length - 1]
      .split('-')
      .map((pn) => {
        return pn.charAt(0).toUpperCase() + pn.substring(1);
      })
      .join(' ');
    setTitle(formattedPathName);
  }, [pathname]);

  return (
    <Helmet>
      <title className="capitalize">Justify Print | {title}</title>
    </Helmet>
  );
};
