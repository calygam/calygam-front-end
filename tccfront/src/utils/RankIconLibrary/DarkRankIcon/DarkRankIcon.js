import rankBronzeDark from     '../../../assets/img/ranks/dark/rank-bronze-dark.svg'
import rankSilverDark from     '../../../assets/img/ranks/dark/rank-silver-dark.svg'
import rankGoldDark from         '../../../assets/img/ranks/dark/rank-gold-dark.svg'
import rankPlatinumDark from '../../../assets/img/ranks/dark/rank-platinum-dark.svg'
import rankDiamondDark from   '../../../assets/img/ranks/dark/rank-diamond-dark.svg'
import rankChampionDark from '../../../assets/img/ranks/dark/rank-champion-dark.svg'

export const DarkRankIcon = [
  { label: "BRONZE-I", icon: rankBronzeDark },
  { label: "SILVER-I", icon: rankSilverDark },
  { label: "GOLD-I", icon: rankGoldDark },
  { label: "PLATINUM-I", icon: rankPlatinumDark },
  { label: "DIAMOND-I", icon: rankDiamondDark },
  { label: "ASCENDENT-I", icon: rankChampionDark }
]

export const translateRank = (rankName) => {
  if (!rankName) return "batatao"

  const baseRank = rankName.toUpperCase().split("-")[0] + "-I"
  const targetRank = DarkRankIcon.find(rankDark => rankDark.label === baseRank)
  return targetRank ? targetRank.icon : false
}