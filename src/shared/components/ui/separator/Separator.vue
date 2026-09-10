<script setup lang="ts">
import type { SeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Separator } from "reka-ui"
import { cn } from "@/shared/lib/utils"

const props = withDefaults(
  defineProps<
    SeparatorProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    orientation: "horizontal",
    decorative: true,
  },
)
</script>

<template>
  <Separator
    :orientation="props.orientation"
    :decorative="props.decorative"
    :as="props.as"
    :as-child="props.asChild"
    :class="
      cn(
        'shrink-0 bg-border',
        props.orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        props.class,
      )
    "
  />
</template>
