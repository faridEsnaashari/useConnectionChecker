# Description:

this hook retruns a state which has true as default value.
whenever internet connection lost, this state value, changed to false.

# How to use:

1- First need to install it from npm:

```
npm install useconnectionchecker
```

2- Then import it to your project and call it with the needed [arguments](https://github.com/faridEsnaashari/useConnectionChecker#arguments). then use the returned state of it to know the connection status.

```javascript
import useConnectionChecker from "useconnectionchecker";

const App = () => {
    const url = window.location.origin.toString();

    const checkTimePeriod = 10000;
    const checkAgainTime = 20000;

    const connection = useConnectionChecker(checkTimePeriod, checkAgainTime, url);

    return(
        <>
            {
                connection ? <p>component</p> : <p>internet connection problem</p>
            }
        </>
    )
};
```

# API:

```javascript
const connection = useConnectionChecker(checkTimePeriod, checkAgainTime, url);
```

### Arguments:

- **checkTimePeriod**: you can specific the priod of time that hook send request to check internet connection, by providing this argument. this argument takes time in milisecond.

  **default value**: 10000ms means 10s.



- **checkAgainTime**: if the connection detects lost, a time interval sets to check the connection again. if it is the same after this time, connection state value changes to false that means connection lost. you can specific this time by provide this argument. this argument takes time in milisecond.

  **default value**: 20000ms means 20s.


- **url**: the hook sends get requsts to this url in order to findout there is internet connection or not. you should use the one which doesn't couse CORS errors.

  **default value**: window.location.origin. it is the server which serves the html and css and js files for client. it is best choice. because we have no CORS errors with it. but it's not work when you serve from localhost because we always have connection from localhost:)))))



### return value:

- **connection**: this is the react state. if there is internet connection, this state value is true. if is not, its value changes to false.


# Contact me:

- linkdin - [farid esnaashari](https://www.linkedin.com/in/farid-esnaashar-8bb139199)
- twitter - [@farid_esnaashar](https://twitter.com/farid_esnaashar)
