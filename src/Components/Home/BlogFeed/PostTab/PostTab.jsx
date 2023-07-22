import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Stack } from '@mui/material';
import FilterMenu from './Filter/FilterMenu';
import { AuthContext } from '../../../../context/AuthProvider';

const PostTab = ({ handleChange, value, handleQuery ,handleFilter}) => {
    const { user } = React.useContext(AuthContext)

    return (
        <>
            <Stack sx={{ width: '100%', borderBottom: '1px solid gray', justifyContent: 'space-between', my: 3 }} direction='row'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="all" label="All Post" onClick={() => handleQuery('')} />
                    <Tab value="my" label="My Post" onClick={() => handleQuery(`author=${user._id}`)} />
                    <Tab value="admin" label="Admin" onClick={() => handleQuery('adminPost=true')} />
                    {user.isAdmin && <Tab value="not" label="Not reply(15)" onClick={() => handleQuery('adminReplied=false&&adminPost=false')} />}
                    {user.isAdmin && <Tab value="unresolved" label="Unresolved" onClick={() => handleQuery('status=unresolved')} />
                    }
                </Tabs>
                {
                    user.isAdmin && <Stack direction='row'>
                    <Button variant='text' size='small'><SearchOutlinedIcon /></Button>
                    <FilterMenu handleQuery={handleFilter} />
                </Stack>
                }
            </Stack>
        </>
    );
};

export default PostTab;