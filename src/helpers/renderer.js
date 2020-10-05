import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            
            <meta http-equiv="Content-Language" content="en">
            <meta name="SpaceX Launch Programs" />

            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="SpaceX Launch Program"/>
            <meta itemprop="name" content="SpaceX Launch Program" />
            <meta property="og:url" content="https://ps-launch-programs.herokuapp.com"/>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="stylesheet" type="text/css" href="/main.css">
              <link rel="icon" type="image/x-icon" href="https://www.spacex.com/static/images/favicon.ico">
	            <link rel="Shortcut Icon" type="image/ico" href="https://www.spacex.com/static/images/favicon.ico">
            </head>
            <body>
              <div id="root">${content}</div>
              <script>
              window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
    /</g,
    '\\u003c'
  )}
                  </script>
              <script src="/bundle.js"></script>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </body>
    </html>`;
};
