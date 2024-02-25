import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  RefreshControl,
  StyleProp,
  ViewStyle,
  ImageStyle,
  StatusBarStyle,
  ScrollView,
} from 'react-native';
import { isIOS } from '@Utils/Constant';
import { AppContext } from '@AppContext';
import CommonStyle from '@Theme/CommonStyle';

interface LayoutProps {
  children: React.ReactNode;
  padding?: number;
  submit?: {
    onSubmit?: () => void;
    isSubmitProcessing?: boolean;
    submitTitle?: string;
    submitBtnStyle?: StyleProp<ViewStyle>;
    onSubmitBtnType?: 'btn' | 'img' | 'text' | 'custom';
    customSubmitComponent?: JSX.Element;
    submitImage?: string;
    submitImageStyle?: StyleProp<ImageStyle>;
  };
  scrollable?: boolean;
  backgroundColor?: string;
  showBack?: boolean;
  refreshControl?: {
    refreshing: boolean;
    onRefresh: () => void;
  };
  removeContainerView?: boolean;
  statusbarBgColor?: string;
  barStyle?: StatusBarStyle | null | undefined;
  containerStyles?: StyleProp<ViewStyle>;
  scrollContainer?: StyleProp<ViewStyle>;
}

const Layout = (props: LayoutProps) => {
  const { appTheme } = useContext(AppContext);
  const {
    children,
    padding = 0,
    scrollable = false,
    backgroundColor,
    refreshControl,
    removeContainerView = false,
    statusbarBgColor = appTheme.background,
    barStyle = 'dark-content',
    containerStyles,
    scrollContainer,
  } = props;

  return (
    <SafeAreaView
      style={[
        CommonStyle.flex1,
        { backgroundColor: backgroundColor || appTheme.background },
        containerStyles,
      ]}>
      <StatusBar backgroundColor={statusbarBgColor} barStyle={barStyle} />
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.keyboardView}
        keyboardVerticalOffset={isIOS ? 0 : -500}>
        {(scrollable && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={[
              styles.scrollContainer,
              { padding },
              scrollContainer,
            ]}
            refreshControl={
              (refreshControl && (
                <RefreshControl
                  refreshing={refreshControl.refreshing}
                  onRefresh={refreshControl.onRefresh}
                  tintColor={appTheme.themeColor}
                />
              )) ||
              undefined
            }>
            {children}
          </ScrollView>
        )) ||
          (removeContainerView && (
            <View style={{ padding }}>{children}</View>
          )) || (
            <View style={[CommonStyle.flex1, { padding }]}>{children}</View>
          )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContainer: { flexGrow: 1 },
});

export { Layout };
