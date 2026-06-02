import type { Metadata } from 'next';
import RankPredictorClient from './RankPredictorClient';

export const metadata: Metadata = {
  title: 'NDA Rank Predictor — Predict Your AIR',
  description: 'Predict your NDA All India Rank using verified UPSC data from 1900+ candidates.',
};

export default function RankPredictorPage() {
  return <RankPredictorClient />;
}
