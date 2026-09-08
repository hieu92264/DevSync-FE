<script setup lang="ts">
import type { AvatarRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { AvatarRoot } from "reka-ui"
import { cn } from "@/shared/lib/utils"

const props = defineProps<
  AvatarRootProps & {
    class?: HTMLAttributes["class"]
  }
>()
</script>

<template>
  <AvatarRoot
    :as="props.as"
    :as-child="props.asChild"
    :class="
      cn(
        'relative flex size-10 shrink-0 overflow-hidden rounded-full',
        props.class,
      )
    "
  >
    <slot />
  </AvatarRoot>
</template>
