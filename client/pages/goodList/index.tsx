import React from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import {useActions} from "@/hooks/useActions";
import ListGoodDeels from "@/components/ListGoodDeels";

const Index = () => {
    return (
        <MainLayouts>
            <div>
                <ListGoodDeels/>
            </div>
        </MainLayouts>

    );
};

export default Index;