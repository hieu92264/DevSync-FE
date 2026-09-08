<script setup lang="ts">
import type { DropdownMenuLabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { DropdownMenuLabel, useForwardProps } from "reka-ui"
import { cn } from "@/shared/lib/utils"

const props = defineProps<
  DropdownMenuLabelProps & {
    class?: HTMLAttributes["class"]
    inset?: boolean
  }
>()

const forwarded = useForwardProps(props)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwarded"
    :class="
      cn(
        'px-2 py-1.5 text-xs font-semibold text-muted-foreground',
        props.inset && 'pl-8',
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuLabel>
</template>
