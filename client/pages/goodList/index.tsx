//страница списка дел
import React from "react";
import MainLayouts from "@/layouts/MainLayouts";
import ListGoodDeels from "@/components/ListGoodDeels";
import { Grid, Card, Box } from "@mui/material";

const Index = () => {
  return (
    <MainLayouts>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid>
              <h1>Ваш список хороших дел</h1>
              <ListGoodDeels />
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayouts>
  );
};

export default Index;
