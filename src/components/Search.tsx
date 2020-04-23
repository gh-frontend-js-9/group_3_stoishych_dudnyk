import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../App';
import { ReactComponent as SearchImg } from '../assets/images/search.svg';
import '../assets/styles/scss/search.scss';


interface IProps {
    classes?: string;
    isUnderline: boolean;
}

const Search: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>('');
  const history = useHistory();
  const query = useQuery();

  const search = (): void => {
    if (value.length > 1) {
      history.push(`/author?id=${query.get('id') || 'all'}&query=${value}`);
      setValue('');
    }
    window.scrollTo(0, 0);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <div className={`search ${props.classes}`}>
      <div className={`search__input-container ${props.isUnderline ? 'search__input-container_underline' : ''}`}>
        <input
          type="text"
          name="search"
          placeholder="Type something..."
          className="search__input"
          onChange={onChange}
          value={value}
          onKeyDown={onKeyDown}
        />
      </div>
      <SearchImg className="search__icon" onClick={search} />
    </div>
  );
};

export default Search;
