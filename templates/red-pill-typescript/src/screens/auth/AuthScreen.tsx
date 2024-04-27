import { Text, View } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import {
  Divider,
  Select,
  Switch,
  VStack,
  Tag,
  Textarea,
  Radio,
  Input,
  Button,
  Title,
} from "@ui";
import { useUser } from "@contexts";

const AuthScreen = () => {
  const { t } = useTranslation();
  const { login } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Title size="xl">{t("Welcome to Red Pill")}</Title>
        <Input variant="filled" label="Email" leftIcon="mail" />

        <Button leftIcon="login" onPress={() => login()}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.gray[0],
  },
  inner: {
    gap: theme.spacing.md,
  },
}));

export default AuthScreen;
