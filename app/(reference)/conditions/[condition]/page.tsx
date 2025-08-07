interface ConditionProps {
  params: {
    condition: string;
  };
}

export function generateMetadata({ params }: ConditionProps) {
  return {
    title: `${params.condition} - Conditions`,
  };
}

export default function Condition({ params }: ConditionProps) {
  return <>{params.condition}</>;
}
