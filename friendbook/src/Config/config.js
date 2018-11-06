import config from 'react-global-configuration';
 
config.set({ 
    service_url: `http://172.23.238.179:8090/api/v1/user`,
    bar: {
        baz: 'qux'
    },
    baz: ['qux']
});