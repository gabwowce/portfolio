import { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';

const useLoadingEffect = (loadData) => {
    const { setLoading } = useLoading();

    useEffect(() => {
        const executeLoadData = async () => {
            setLoading(true);
            await loadData(); 
            setLoading(false);
        };

        executeLoadData();
    }, [loadData, setLoading]);
};

export default useLoadingEffect;
