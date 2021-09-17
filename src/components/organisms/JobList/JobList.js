import React, {useState} from 'react';
import {ListData} from '../../../config/redux/url/ListData';
import SearchBar from '../../molecules/input/SearchBar';
import {CardSwitch} from '../../molecules/card';
import ScrollVertical from '../ScrollVertical';
import {screens} from '../../../config/routes/listScreens';

const JobList = ({handleNext}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [value, setValue] = useState(false);

  const filterList = ListData => {
    return ListData.filter(listItem =>
      value
        ? (listItem.company.toLowerCase().includes(search.toLowerCase()) ||
            listItem.title.toLowerCase().includes(search.toLowerCase())) &&
          listItem.type.toLowerCase().includes(search.toLowerCase())
        : listItem.company.toLowerCase().includes(search.toLowerCase()) ||
          listItem.title.toLowerCase().includes(search.toLowerCase()) ||
          listItem.type.toLowerCase().includes(search.toLowerCase()),
    );
  };
  // const handleNext = id => {
  //   const {navigation} = props;
  //   navigation.push(screens.job_detail, {id});
  // };

  console.log(filterList);
  return (
    <>
      <SearchBar
        onPress={() => setOpen(!open)}
        onChange={search => setSearch(search)}
      />
      {open ? (
        <CardSwitch value={value} onValueChange={() => setValue(!value)} />
      ) : null}
      <ScrollVertical
        data={filterList(ListData)}
        component={'CardJob'}
        itemProps={{onPress: handleNext}}
      />
    </>
  );
};

export default JobList;
