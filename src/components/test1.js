import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Test = () => {
  return (
    <Box sx={{ border: "2px solid", margin: 40, marginTop: 20 }}>
      <Typography margin={4} fontWeight={"bold"} fontSize={25}>
        学生
      </Typography>
      <Stack direction="row" marginLeft={15}>
        <Stack direction="column" flex={1} spacing={3}>
          <Typography fontWeight={"bold"} fontSize={20}>名前</Typography>
          <Typography fontWeight={"bold"} fontSize={20}>性別</Typography>
          <Typography fontWeight={"bold"} fontSize={20}>年齢</Typography>
          <Typography fontWeight={"bold"} fontSize={20}>メイル</Typography>
          <Typography fontWeight={"bold"} fontSize={20}>電話番号</Typography>
        </Stack>

        <Avatar
          alt="Avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          sx={{
            border: "2px solid",
            borderRadius: 50,
            width: 230,
            height: 230,
            marginRight: 10,
          }}
        >
        </Avatar>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        marginTop={5}
        marginBottom={5}
        marginRight={10}
      >
        <Box flex={1}></Box>
        <Stack direction="row" flex={1} justifyContent="space-around">
          <Button
            variant="outlined"
            sx={{
              color: "#111111",
              borderColor: "#3B5B95",
              minWidth: 150,
              borderWidth: 3,
              fontWeight: 'bold',
              fontSize: 20
            }}
          >
            同意
          </Button>
          <Button
            variant="outlined"
            sx={{
                color: "#111111",
                borderColor: "#3B5B95",
                minWidth: 150,
                borderWidth: 3,
                fontWeight: 'bold',
                fontSize: 20
              }}          
            >
            断る
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Test;
