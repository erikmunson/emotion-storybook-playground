import accordionCollapse from './vectors/accordionCollapse.svg';
import accordionExpand from './vectors/accordionExpand.svg';
import accordionExpandAll from './vectors/accordionExpandAll.svg';
import artifact from './vectors/artifact.svg';
import artifactApproved from './vectors/artifactApproved.svg';
import artifactPending from './vectors/artifactPending.svg';
import artifactSkipped from './vectors/artifactSkipped.svg';
import build from './vectors/build.svg';
import caretRight from './vectors/caretRight.svg';
import checkBadge from './vectors/checkBadge.svg';
import checkboxIndeterminate from './vectors/checkboxIndeterminate.svg';
import checkboxChecked from './vectors/checkboxChecked.svg';
import checkboxUnchecked from './vectors/checkboxUnchecked.svg';
import close from './vectors/close.svg';
import closeSmall from './vectors/closeSmall.svg';
import cloudDeployed from './vectors/cloudDeployed.svg';
import cloudError from './vectors/cloudError.svg';
import cloudProgress from './vectors/cloudProgress.svg';
import cloudDecommissioned from './vectors/cloudDecommissioned.svg';
import cluster from './vectors/cluster.svg';
import copyClipboard from './vectors/copyClipboard.svg';
import environment from './vectors/environment.svg';
import fn from './vectors/fn.svg';
import fnNew from './vectors/fnNew.svg';
import instances from './vectors/instances.svg';
import loadBalancer from './vectors/loadBalancer.svg';
import manualJudgement from './vectors/manualJudgement.svg';
import placeholder from './vectors/placeholder.svg';
import securityGroup from './vectors/securityGroup.svg';
import servergroupAws from './vectors/servergroupAws.svg';
import spel from './vectors/spel.svg';
import templateFull from './vectors/templateFull.svg';
import templateWorkflow from './vectors/templateWorkflow.svg';

// Icons prefixed sp* are intended for use with the current Spinnaker UI design. They are visually heavier.
import spCIBranch from './vectors/spCIBranch.svg';
import spCIBuild from './vectors/spCIBuild.svg';
import spCICommit from './vectors/spCICommit.svg';
import spCIMaster from './vectors/spCIMaster.svg';
import spCIPullRequest from './vectors/spCIPullRequest.svg';
import spMenuCanaryConfig from './vectors/spMenuCanaryConfig.svg';
import spMenuCanaryReport from './vectors/spMenuCanaryReport.svg';
import spMenuClusters from './vectors/spMenuClusters.svg';
import spMenuConfig from './vectors/spMenuConfig.svg';
import spMenuLoadBalancers from './vectors/spMenuLoadBalancers.svg';
import spMenuPager from './vectors/spMenuPager.svg';
import spMenuPipelines from './vectors/spMenuPipelines.svg';
import spMenuProperties from './vectors/spMenuProperties.svg';
import spMenuSecurityGroups from './vectors/spMenuSecurityGroups.svg';
import spMenuTasks from './vectors/spMenuTasks.svg';
import spMenuTimeline from './vectors/spMenuTimeline.svg';

// Kayenta
import canaryFail from './vectors/canaryFail.svg';
import canaryRunning from './vectors/canaryRunning.svg';
import canaryPass from './vectors/canaryPass.svg';
import canaryMarginal from './vectors/canaryMarginal.svg';

// Managed Delivery
import mdActuating from './vectors/mdActuating.svg';
import mdActuationLaunched from './vectors/mdActuationLaunched.svg';
import mdCreated from './vectors/mdCreated.svg';
import mdDeltaDetected from './vectors/mdDeltaDetected.svg';
import mdDeltaResolved from './vectors/mdDeltaResolved.svg';
import mdDiff from './vectors/mdDiff.svg';
import mdError from './vectors/mdError.svg';
import mdFlapping from './vectors/mdFlapping.svg';
import mdPaused from './vectors/mdPaused.svg';
import mdResumed from './vectors/mdResumed.svg';
import mdUnknown from './vectors/mdUnknown.svg';
import mdConstraintGeneric from './vectors/mdConstraintGeneric.svg';
import mdConstraintDependsOn from './vectors/mdConstraintDependsOn.svg';
import mdConstraintAllowedTimes from './vectors/mdConstraintAllowedTimes.svg';
import md from './vectors/md.svg';

export const iconsByName = {
  accordionCollapse,
  accordionExpand,
  accordionExpandAll,
  artifact,
  artifactApproved,
  artifactPending,
  artifactSkipped,
  build,
  canaryFail,
  canaryRunning,
  canaryPass,
  canaryMarginal,
  caretRight,
  checkBadge,
  checkboxIndeterminate,
  checkboxChecked,
  checkboxUnchecked,
  close,
  closeSmall,
  cloudDeployed,
  cloudError,
  cloudProgress,
  cloudDecommissioned,
  cluster,
  copyClipboard,
  environment,
  fn,
  fnNew,
  instances,
  loadBalancer,
  manualJudgement,
  mdActuating,
  mdActuationLaunched,
  mdCreated,
  mdDeltaDetected,
  mdDeltaResolved,
  mdDiff,
  mdError,
  mdFlapping,
  mdPaused,
  mdResumed,
  mdUnknown,
  mdConstraintGeneric,
  mdConstraintDependsOn,
  mdConstraintAllowedTimes,
  md,
  placeholder,
  securityGroup,
  servergroupAws,
  spCIBranch,
  spCIBuild,
  spCICommit,
  spCIMaster,
  spCIPullRequest,
  spMenuCanaryConfig,
  spMenuCanaryReport,
  spMenuClusters,
  spMenuConfig,
  spMenuLoadBalancers,
  spMenuPager,
  spMenuPipelines,
  spMenuProperties,
  spMenuSecurityGroups,
  spMenuTasks,
  spMenuTimeline,
  spel,
  templateFull,
  templateWorkflow,
} as const;
