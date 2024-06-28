import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { Text } from "react-native";
import { Ear } from "../types";
import { useAttenuationAppNavigation } from "../navigation/useAttenuationAppNavigation";

type TestPlanPage = {
    title: string,
    Component: ReactNode
};

type TestPlanContextType = {
    current: TestPlanPage;
    progress: number;
    navigateNext: () => void;
    setTestPlan: Dispatch<SetStateAction<TestPlanPage[]>>;
}

const adjustVolumePageTitle = "Juster lydvolumet sakte til du akkurat kan høre tonen";
const getPlaySoundPageTitle = (ear: Ear, withPlugs: boolean) => {
    const withOrWithout = withPlugs ? "med" : "uten";
    const earName = ear === "left" ? "venstre" : "høyre";
    return `Lydtest ${earName} øre ${withOrWithout} propper`;

}

const TEST_PLAN_PAGES: Record<string, TestPlanPage> = {
WITHOUT_PLUG_LEFT_EAR_PLAY: {title: getPlaySoundPageTitle("left", false), Component: <Text>Spill av lyd knapp</Text>},
WITHOUT_PLUG_LEFT_EAR_TEST: {title: adjustVolumePageTitle, Component: <Text>Volumknapper</Text>},
WITHOUT_PLUG_RIGHT_EAR_PLAY: {title: getPlaySoundPageTitle("right", false), Component: <Text>Spill av lyd knapp</Text>},
WITHOUT_PLUG_RIGHT_EAR_TEST: {title: adjustVolumePageTitle, Component: <Text>Volumknapper</Text>},
TEST_WITH_PLUGS: {title: "Lydtest med propper", Component: <Text>Bilde av hvordan øreplugger settes inn</Text>},
WITH_PLUG_LEFT_EAR_PLAY: {title: getPlaySoundPageTitle("left", true), Component: <Text>Spill av lyd knapp</Text>},
WITH_PLUG_LEFT_EAR_TEST: {title: adjustVolumePageTitle, Component: <Text>Volumknapper</Text>},
WITH_PLUG_RIGHT_EAR_PLAY: {title: getPlaySoundPageTitle("right", true), Component: <Text>Spill av lyd knapp</Text>},
WITH_PLUG_RIGHT_EAR_TEST: {title: adjustVolumePageTitle, Component: <Text>Volumknapper</Text>},

}

const TEST_PLAN: Record<string, TestPlanPage[]> = {
    WITHOUT_PLUG_LEFT_EAR: [TEST_PLAN_PAGES.WITHOUT_PLUG_LEFT_EAR_PLAY, TEST_PLAN_PAGES.WITHOUT_PLUG_LEFT_EAR_TEST ],
    WITHOUT_PLUG_RIGHT_EAR: [TEST_PLAN_PAGES.WITHOUT_PLUG_RIGHT_EAR_PLAY, TEST_PLAN_PAGES.WITHOUT_PLUG_RIGHT_EAR_TEST],
    TEST_WITH_PLUGS: [TEST_PLAN_PAGES.TEST_WITH_PLUGS],
    WITH_PLUG_LEFT_EAR: [TEST_PLAN_PAGES.WITH_PLUG_LEFT_EAR_PLAY, TEST_PLAN_PAGES.WITH_PLUG_LEFT_EAR_TEST],
    WITH_PLUG_RIGHT_EAR: [TEST_PLAN_PAGES.WITH_PLUG_RIGHT_EAR_PLAY, TEST_PLAN_PAGES.WITH_PLUG_RIGHT_EAR_TEST],
};

const TestPlanContext = createContext<TestPlanContextType>({
    current: TEST_PLAN.WITHOUT_PLUG_LEFT_EAR[0],
    progress: 0,
    navigateNext: () => undefined,
    setTestPlan: () => undefined,
})

type TestPlanProviderProps = {
    children: ReactNode;
}

export const TestPlanProvider = ({children}: TestPlanProviderProps) => {
    const [testPlan, setTestPlan] = useState<TestPlanPage[]>([...TEST_PLAN.WITHOUT_PLUG_LEFT_EAR, ...TEST_PLAN.WITHOUT_PLUG_RIGHT_EAR, ...TEST_PLAN.TEST_WITH_PLUGS, ...TEST_PLAN.WITH_PLUG_LEFT_EAR, ...TEST_PLAN.WITH_PLUG_RIGHT_EAR])
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const current = testPlan[currentPageIndex];
    const progress = (currentPageIndex + 1) / testPlan.length;
    const { navigate } = useAttenuationAppNavigation()

    const navigateNext = () => {
        if (currentPageIndex < testPlan.length - 1) {
            setCurrentPageIndex(currentPageIndex => currentPageIndex + 1)
        } else {
            navigate("ResultScreen")
        }
    }

    return (
        <TestPlanContext.Provider value={{
            current,
            progress,
            navigateNext,
            setTestPlan
        }}>
            {children}
        </TestPlanContext.Provider>
    )
}

export const useTestPlanContext = () => useContext(TestPlanContext);