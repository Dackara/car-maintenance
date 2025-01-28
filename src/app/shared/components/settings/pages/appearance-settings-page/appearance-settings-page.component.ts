import { Component, inject, input } from '@angular/core';
import { ColorEnum } from '../../colors-enum';
import { AppearanceType } from '../../interface';
import { SettingsService } from '../../settings.service';
import { MatDivider } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { SettingComponent } from '../../setting/setting.component';
import { SwitchModule } from '@shared/components/switch/switch.module';
import { ColorSelectorModule } from '@shared/components/color-selector/color-selector.module';
import { Color } from '../../color-interface';
import { ThemeService } from '@core/services/theme';

@Component({
  selector: 'cm-appearance-settings-page',
  standalone: true,
  imports: [
    MatDivider,
    SettingComponent,
    TranslateModule,
    ColorSelectorModule,
    SwitchModule,
  ],
  templateUrl: './appearance-settings-page.component.html',
  styleUrl: './appearance-settings-page.component.scss'
})
export class AppearanceSettingsPageComponent {

  colors = input<Color[]>();

  public settingsService = inject(SettingsService);
  public themeService = inject(ThemeService);

  public onAnimationsChanged(checked: boolean): void {
    this.settingsService.setAnimations(checked);
  }

  public onSelectColor(colors: ColorEnum) {
    this.settingsService.changeThemeColor(colors);
  }

  public setAppearance(appearance: AppearanceType): void {
    this.settingsService.setAppearance(appearance);
  }
}
