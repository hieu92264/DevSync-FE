<script setup lang="ts">
import type { AvatarFallbackProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { AvatarFallback } from "reka-ui"
import { cn } from "@/shared/lib/utils"

const props = defineProps<
  AvatarFallbackProps & {
    class?: HTMLAttributes["class"]
  }
>()
</script>

<template>
  <AvatarFallback
    :delay-ms="props.delayMs"
    :as="props.as"
    :as-child="props.asChild"
    :class="
      cn(
        'flex size-full items-center justify-center rounded-full bg-muted font-medium text-xs text-muted-foreground',
        props.class,
      )
    "
  >
    <slot />
  </AvatarFallback>
</template>
