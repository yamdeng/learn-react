declare global {
  declare module "chart.js" {
    interface ChartConfiguration<
      TType extends ChartType = ChartType,
      TData = DefaultDataPoint<TType>,
      TLabel = unknown
    > {
      type: TType;
      data?: ChartData<TType, TData, TLabel>;
      options?: ChartOptions<TType>;
      plugins?: Plugin<TType>[];
      platform?: typeof BasePlatform;
    }

    interface PluginOptionsByType<TType extends ChartType> {
      colors: ColorsPluginOptions;
      decimation: DecimationOptions;
      filler: FillerOptions;
      legend: LegendOptions<TType>;
      subtitle: TitleOptions;
      title: TitleOptions;
      tooltip: TooltipOptions<TType>;
      "datasource-prometheus"?: any | undefined;
    }
  }
}
