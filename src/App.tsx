import { SetStateAction, useState } from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar changeGenreId={(genreId: SetStateAction<number>) => setSelectedGenreId(genreId)} />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}