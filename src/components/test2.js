import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Test2 = () => {
  return (
    <Box sx={{ border: "2px solid", margin: 30, marginTop: 20, minHeight: 450 }}>
      <Stack direction="row" flex={1}>
        <Stack direction="column">
          <Avatar
            alt="Avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            sx={{
              border: "2px solid",
              borderRadius: 50,
              width: 150,
              height: 150,
              margin: 5,
            }}
          ></Avatar>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              sx={{
                color: "#111111",
                borderColor: "#3B5B95",
                minWidth: 100,
                borderWidth: 3,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              チェンジ
            </Button>
          </Box>
        </Stack>

        <Stack direction="column" flex={1} margin={5}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              sx={{
                color: "#111111",
                borderColor: "#3B5B95",
                minWidth: 250,
                borderWidth: 3,
                fontWeight: "bold",
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              プロフィールを更新
            </Button>
          </Box>

          <Stack direction="row" justifyContent="space-around">
            <Stack direction="column" spacing={2}>
              <Typography fontSize={20}>名前</Typography>
              <Typography fontSize={20}>メイル</Typography>
              <Typography fontSize={20}>電話番号</Typography>
              <Typography fontSize={20}>住所</Typography>
            </Stack>

            <Stack direction="column" spacing={2}>
              <Typography fontSize={20}>年齢</Typography>
              <Typography fontSize={20}>経験</Typography>
              <Typography fontSize={20}>料金</Typography>
              <Typography fontSize={20}>レベル</Typography>
              <Typography fontSize={20}>成績</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Test2;
