import React, {useState} from 'react';
import {View} from 'react-native';
import {ListData} from '../../../config/redux/url/ListData';
import {CardSwitch} from '../../molecules/card';
import SearchBar from '../../molecules/input/SearchBar';
import ScrollVertical from '../ScrollVertical';

const JobList = ({handleNext}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [searchLoc, setSearchLoc] = useState('');
  const [value, setValue] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const perpage = ListData.slice(0, 10);

  let dataCurrent = perpage;

  const filterList = ListData => {
    console.log(value && searchLoc !== '');
    return ListData.filter(listItem =>
      value
        ? (listItem.company.toLowerCase().includes(search.toLowerCase()) ||
            listItem.title.toLowerCase().includes(search.toLowerCase())) &&
          listItem.type
        : listItem.company.toLowerCase().includes(search.toLowerCase()) ||
          listItem.title.toLowerCase().includes(search.toLowerCase()) ||
          listItem.type,
    );
  };

  const handleFilter = data => {
    console.log('masuk', data);
  };

  console.log(dataCurrent, page);
  return (
    <View>
      <SearchBar
        onPress={() => {
          setOpen(!open);
        }}
        onChange={search => setSearch(search)}
      />
      {open ? (
        <CardSwitch
          value={value}
          onValueChange={() => setValue(!value)}
          onChange={searchLoc => setSearchLoc(searchLoc)}
          onPress={handleFilter}
        />
      ) : null}
      <ScrollVertical
        data={filterList(ListData)}
        component={'CardJob'}
        style={{marginTop: 20, marginBottom: 100}}
        contentContainerStyle={{
          marginBottom: 20,
        }}
        itemProps={{onPress: handleNext}}
      />
    </View>
  );
};

export default JobList;
