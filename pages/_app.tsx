// tslint:disable-next-line no-submodule-imports
import App from 'next/app';
import * as React from 'react';
import { CssBaseline } from '@material-ui/core';

export default class MyApp extends App {
  public componentDidMount() {
    const style = document.getElementById('server-side-styles');

    if (style && style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }

  public render() {
    return (
      <>
        <CssBaseline />
        {super.render()}
      </>
    );
  }
}
