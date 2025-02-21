import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <View className="flex-1 bg-base p-4">
      <Card className="bg-mantle">
        <CardHeader>
          <CardTitle className="text-text">Daily Streaks</CardTitle>
          <CardDescription className="text-subtext0">
            Keep track of your daily activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <View className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage src={GITHUB_AVATAR_URI} />
                <AvatarFallback className="bg-surface0">SK</AvatarFallback>
              </Avatar>
              <View className="flex-1 space-y-1">
                <Text className="text-sm font-medium text-text">
                  Coding Practice
                </Text>
                <Progress value={progress} className="bg-surface0" />
              </View>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <Info className="h-4 w-4 text-blue" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-surface0 text-text">
                  {progress}% completed
                </TooltipContent>
              </Tooltip>
            </View>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
