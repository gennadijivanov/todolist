import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import absoluteUrl from 'next-absolute-url';

import HomePage from '../components/HomePage';
import { WithToDoListProvider } from '../contexts';
import { getTasks } from '../transport';
import { ToDoItem } from '../types';

export const getServerSideProps: GetServerSideProps<{
  todos: ToDoItem[];
}> = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const todos = await getTasks(origin);

  return {
    props: {
      todos,
    },
  };
};

export default function Home({ todos }: { todos: ToDoItem[] }): JSX.Element {
  return (
    <div>
      <Head>
        <title>To? Do!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithToDoListProvider todos={todos}>
        <HomePage></HomePage>
      </WithToDoListProvider>
    </div>
  );
}
