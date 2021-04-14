import { useState, useEffect } from "react";
import axios from "axios";

const useSocketReConnector = (checkTimeInterval = 10000, checkTimeOut = 20000, url = window.location.origin.toString()) => {
    const [ connection, setConnection ] = useState(true);

    async function* checkConnection(){
        while(true){
            try{
                const connectionsCheckResult = await axios.get(url);
                yield;
            }
            catch(err){
                if(err.message.toString() === "Network Error"){
                    break;
                }
                yield;
            }
        }

        yield "checkAgain";

        try{
            const connectionsCheckResult = await axios.get(url);
        }
        catch(err){
            if(err.message.toString() === "Network Error"){
                setConnection(false);
                return;
            }
        }
    }

    useEffect(() => {
        const connectionChecker = checkConnection();

        const connectionsCheckTimer = setInterval(() => {
            const status = connectionChecker.next().value;
            if(status === "checkAgain"){
                const connectionsCheckAndConnectTimer = setTimeout(connectionChecker.next(), checkTimeOut);
            }
        }, checkTimeInterval);

        return () => clearInterval(connectionsCheckTimer);
    }, []);

    return connection;
};

export default useSocketReConnector;
