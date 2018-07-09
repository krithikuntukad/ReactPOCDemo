import DialogManager, {
  ScaleAnimation,
  DialogContent
} from "react-native-dialog-component";

/**
 * Function : Displays Any Strings in a dialogue box
 * Description : Class provides check box component
 */
DialogManager.show(
  {
    title: "Dialog",
    titleAlign: "center",
    animationDuration: 200,
    ScaleAnimation: new ScaleAnimation(),
    children: (
      <DialogContent>
        <View>
          <Text>React Native Dialog Component</Text>
        </View>
      </DialogContent>
    )
  },
  () => {
    console.log("callback - show");
  }
);

DialogManager.dismissAll(() => {
  console.log("callback - dismiss all");
});