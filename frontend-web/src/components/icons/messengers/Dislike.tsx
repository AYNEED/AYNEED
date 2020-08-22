import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconPropsWithFilled } from 'src/types';

export const Dislike: React.FC<IconPropsWithFilled> = ({
  fill = COLOR.SECONDARY_100,
  width = 25,
  height = 24,
  filled = false,
}) => (
  <svg width={width} height={height} fill="none">
    <path
      d={
        filled
          ? 'M19.592 12.433c-.61.243-1.902.781-3.04 1.752-1.231 1.148-2.318 2.842-1.974 5.42a1.358 1.358 0 01-.285.994 1.634 1.634 0 01-.56.433c-.12.06-.25.096-.383.104a1.919 1.919 0 00-.03.005l-.048.008-.171.027c-.176.028-.428.06-.698.062-.945.029-1.752-.22-2.4-.711-.636-.483-1.043-1.144-1.3-1.82-.498-1.3-.517-2.85-.418-3.999a.28.28 0 00-.01-.058.287.287 0 00-.062-.01 14.797 14.797 0 01-4.248-.327 5.43 5.43 0 01-1.5-.557c-.443-.253-.886-.619-1.156-1.136-.505-.875-.404-2.01.145-3.06a.386.386 0 00-.016-.206l-.015-.042c-.09-.271-.237-.708-.237-1.174V8.1c0-.284-.002-.823.334-1.362.166-.314.356-.503.534-.68a30.852 30.852 0 00.036-.037 1 1 0 01-.004-.082v-.8a1 1 0 01.03-.242c.115-.462.371-1.173.863-1.665a.618.618 0 00.015-.015 1 1 0 01.022-.12l.04-.162c.082-.35.211-.893.436-1.343a1.002 1.002 0 01.083-.139c.192-.289.506-.761 1.111-1.081.523-.325 1.227-.44 1.89-.333h8.613c.014 0 .085 0 .156.007a1.11 1.11 0 01.501.176l3.877.946a1 1 0 01.763.971v9.3a1 1 0 01-.894.995zm-6.23 8.701h-.001.002z'
          : 'M11.212 18.935c.243.184.593.323 1.14.305h.034c.046 0 .095-.003.145-.007-.2-3.063 1.211-5.168 2.674-6.527l.03-.026c1.182-1.014 2.486-1.633 3.25-1.956v-7.8l-3.336-.813a.999.999 0 01-.2-.072H6.487a1 1 0 01-.196-.02 1.028 1.028 0 00-.365-.006.54.54 0 00-.185.058 1 1 0 01-.107.062c-.128.065-.2.143-.377.404-.098.214-.16.47-.24.8l-.037.152c-.045.488-.305.876-.586 1.157-.097.097-.221.336-.307.626v.546c.072.38-.014.722-.127.972-.13.284-.316.506-.466.656a9.114 9.114 0 00-.177.183.241.241 0 00-.036.057 1 1 0 01-.062.108.128.128 0 00-.02.06c-.01.054-.012.122-.012.285 0 .109.037.25.148.584a2.387 2.387 0 010 1.532 1 1 0 01-.074.17c-.393.707-.272 1.108-.217 1.2a.988.988 0 01.037.067c.032.064.13.188.377.329.24.137.565.257.946.342l.008.002c1.2.277 2.596.369 3.692.277a1 1 0 01.083-.003c.498 0 1.077.163 1.507.593.43.43.593 1.009.593 1.507 0 .03-.002.06-.004.09-.095 1.045-.056 2.265.288 3.166.167.437.385.745.642.94zm8.38-6.501c-.61.243-1.903.781-3.04 1.751-1.232 1.15-2.319 2.843-1.975 5.422a1.358 1.358 0 01-.285.994 1.634 1.634 0 01-.56.433 1 1 0 01-.382.103l-.03.005-.048.008-.172.027c-.176.028-.428.06-.697.062-.945.028-1.753-.22-2.4-.711-.637-.483-1.043-1.144-1.301-1.82-.497-1.3-.517-2.85-.418-3.999a.28.28 0 00-.01-.058.287.287 0 00-.061-.01 14.797 14.797 0 01-4.248-.327 5.433 5.433 0 01-1.5-.557c-.444-.253-.886-.619-1.156-1.136-.505-.875-.405-2.01.145-3.06a.386.386 0 00-.017-.206l-.014-.042c-.091-.271-.237-.708-.237-1.174V8.1c-.001-.284-.003-.824.333-1.362.167-.314.357-.503.534-.68l.026-.026a.646.646 0 00.01-.01 1 1 0 01-.003-.083v-.8a1 1 0 01.03-.242c.115-.462.37-1.173.863-1.665a.618.618 0 00.014-.015 1 1 0 01.023-.12l.039-.162c.082-.35.211-.893.436-1.343a1 1 0 01.083-.139c.193-.289.507-.761 1.112-1.081.523-.325 1.226-.44 1.888-.333h8.614c.015 0 .085 0 .157.007a1.11 1.11 0 01.5.176l3.878.946a1 1 0 01.763.971v9.3a1 1 0 01-.895.995zm-6.23 8.701h-.002.002z'
      }
      fill={fill}
    />
  </svg>
);
